# GMT

详细的`doc`见[GMT doc](https://docs.gmt-china.org/latest/)

## Base ploting

简单平面图 (velocity, perturbation maps)

$$sum_{i=1}^n a_i=0$$

$
sum_{i=1}^n a_i=0
$ sdas

```sh
gmt begin

tec_line="/d/zhangxzh/Data/Geotectonic_line/China_tec/*.txt"
REGION="..." # Lon_min/Lon_max/Lat_min/Lat_max
PROJ="M12c" # projection and size

gmt figure figname png,pdf # figure name and type
gmt basemap -R$REGION -J$PROJ -Bxa5f5 -Bya5f5 --FONT_ANNOT_PRIMARY='8p,4' --MAP_FRAME_TYPE="plain" -V

gmt xyz2grd [data file] -R$REGION -I0.5/0.5 -G[grdfile] -V
gmt grdsample [grdfile] -I1m -G[sample.grd] -R$REGION -V
gmt makecpt -Cjet -T3.2/4.5/0.1 -I -V -D 
# -D use the value color instead of the COLOR_BACKGROUND, COLOR_FOREGROUND and COLOR_NAN
gmt grdimage grd_samp.junk -Q -I[gradient file] -V

for teclines in `ls $tec_line`;do
awk -F',' '{if (NR>1) {print $2,$3}}' $teclines | gmt plot -W1.5p,255
# awk -F',' '{if (NR>1) {print $2,$3}}' $teclines | gmt plot -W1p,50
done

gmt colorbar -B0.5+l"Vs (km/s)" --FONT="9p,4"

gmt end # not show
#gmt end show
```

简单剖面图（速度）

```sh
gmt begin

latst='30'
lonst='100'
latend='47.4893'
lonend='75.91708'
targetrange='74/135/20/54'
filename='section_test'
st_sybo="G"
nd_sybo="G'"

gmt figure $filename png

# ------ extract the longitude and latitue of cross section ------
gmt project -C$lonst/$latst -E$lonend/$latend -G0.05 > tarck.point
awk '{printf "%.2f %.2f %.2f\n",$1,$2,$3}' tarck.point > track_lon_lat_${latst}_${lonst}_${latend}_${lonend}.dat
horaxis=`tail -1 track_lon_lat_${latst}_${lonst}_${latend}_${lonend}.dat | awk '{print 100*$3}'`
# ------ set Range for plotting ------
topo_top='8'
vel_maxdepth='250'
RANGEvel="0/$horaxis/5/$vel_maxdepth"
RANGEtopo="0/$horaxis/0/$topo_top"
maphorJ=`echo "$horaxis" | awk -v horiz=${horaxis} '{print $1*13/horiz}'`
echo $horaxis $RANGEvel $RANGEtopo $maphorJ
Jtopo="X${maphorJ}c/1.15c" # -JXwidth/height
Jvel="X${maphorJ}c/-3.6c"
# ------ extract topography  for location of cross section ------
gmt grdcut @earth_relief_01m_g -R$targetrange -Gtopo.grd.junk
gmt grdtrack track_lon_lat_${latst}_${lonst}_${latend}_${lonend}.dat -Gtopo.grd.junk > \
track.profile.topo_${latst}_${lonst}_${latend}_${lonend}
echo "100 100 5000 -50" >> track.profile.topo_${latst}_${lonst}_${latend}_${lonend}
sed -i '1i100 100 -5000 0' track.profile.topo_${latst}_${lonst}_${latend}_${lonend}
# ------ plot topography of section ------
gmt basemap -R$RANGEtopo -J$Jtopo -Bxa500f250 -Bya3f1.5+l"Elev (km)" -BWbet \
--MAP_FRAME_TYPE='plain' --FONT_LABEL='8p,4' --MAP_FRAME_PEN='0.5p' --FONT_ANNOT='7p,29'
awk '{print $3*100, $4/1000}' track.profile.topo_${latst}_${lonst}_${latend}_${lonend} |\
gmt plot -W0.1p,0 -G190 -R$RANGEtopo --FONT_LABEL='2p'
echo "${st_sybo}" | gmt text -F+f8p,1,white=1p,white,solid+cBL -Dj0.1c/0.1c
echo "${nd_sybo}" | gmt text -F+f8p,1,white=1p,white,solid+cBR -Dj0.1c/0.1c
echo "${st_sybo}" | gmt text -F+f8p,1+cBL -Dj0.1c/0.1c
echo "${nd_sybo}" | gmt text -F+f8p,1+cBR -Dj0.1c/0.1c
# ------ plot velocity-depth ------
vel_model_path="./model/*_km_vs.dat"
cat << EOF > yannots.txt
25 a
50 f
75 a
100 f
125 a
150 f
175 a
200 f
225 a
250 f
EOF
gmt basemap -R$RANGEvel -J$Jvel -Bxa200f100+l"Distance (km)" -Bycyannots.txt+l"Depth (km)" -BWSe \
--MAP_FRAME_TYPE='plain' --FONT_LABEL='8p,4' --MAP_FRAME_PEN='0.5p' -Y-h-2.545c --FONT_ANNOT='7p,29'
rm track.profile.vel_*
REGION='74/135/20/54'
for file in `ls ${vel_model_path}`;do
    echo $file
    awk '{print $2,$1,$3}' $file | gmt xyz2grd -R$REGION -I0.5/0.5 -G$file.nc
    gmt grdsample $file.nc -G$file.nc.1m -I1m -R$REGION -V
    depth=`echo $file | awk -F'/' '{print $3}' | awk -F'_' '{print $1}'`
    echo "===============${depth}=========="
    gmt grdtrack track_lon_lat_${latst}_${lonst}_${latend}_${lonend}.dat -G$file.nc.1m -V | awk  -v deppp=$depth '{print $1, $2, $3,deppp,$4}' >> \
    track.profile.vel_${latst}_${lonst}_${latend}_${lonend}
    rm $file.nc $file.nc.1m
done
awk '{print $3*100, $4, $5}' track.profile.vel_${latst}_${lonst}_${latend}_${lonend} | \
gmt nearneighbor -I10/10 -Gvel.grd -R$RANGEvel -V -S10
# gmt surface -I5/5 -Gvel.grd -R$RANGEvel -V
gmt grdsample vel.grd -Gtemp1.grd.junk -I1m  -R$RANGEvel -V
gmt makecpt -Cturbo -T3.2/4.75/0.05 -I -D
gmt grdimage temp1.grd.junk -Q -R$RANGEvel # -Cdep_vel.cpt
# gmt colorbar -B0.2+l"Vs (km/s)" --FONT_ANNOT='7p,29'  --FONT_LABEL='8p,4'
# gmt colorbar -Cdep_vel.cpt -B0.2+l"Vs (km/s)" --FONT_ANNOT='7p,29'  --FONT_LABEL='8p,4'
gmt colorbar -B0.2+l"Vs (km/s)" --FONT_ANNOT='7p,29'  --FONT_LABEL='8p,4'
gmt end show
```

## Citation

All figures were generated using [Generic Mapping Tools](https://www.generic-mapping-tools.org/) (GMT, Wessel et al., 2019) and the [Matplotlib](https://matplotlib.org/) library implemented in Python (Hunter, 2007).

GMT6:
> Wessel, P., Luis, J. F., Uieda, L., Scharroo, R., Wobbe, F., Smith, W. H. F., & Tian, D. (2019). The Generic Mapping Tools version 6. Geochemistry, Geophysics, Geosystems, 20, 5556–5564. https://doi.org/10.1029/2019GC008515

GMT5:
> Wessel, P., Smith, W. H. F., Scharroo, R., Luis, J., & Wobbe, F. (2013). Generic Mapping Tools: Improved version released. Eos, Transactions American Geophysical Union, 94(45), 409–410. https://doi.org/10.1002/2013EO450001

## History

- Last modify: 2022/10/26