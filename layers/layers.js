var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Sungai_1 = new ol.format.GeoJSON();
var features_Sungai_1 = format_Sungai_1.readFeatures(json_Sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_1.addFeatures(features_Sungai_1);
var lyr_Sungai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_1, 
                style: style_Sungai_1,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_1.png" /> Sungai'
            });
var format_Lorong_2 = new ol.format.GeoJSON();
var features_Lorong_2 = format_Lorong_2.readFeatures(json_Lorong_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lorong_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lorong_2.addFeatures(features_Lorong_2);
var lyr_Lorong_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lorong_2, 
                style: style_Lorong_2,
                popuplayertitle: 'Lorong',
                interactive: true,
                title: '<img src="styles/legend/Lorong_2.png" /> Lorong'
            });
var format_Komplek_3 = new ol.format.GeoJSON();
var features_Komplek_3 = format_Komplek_3.readFeatures(json_Komplek_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Komplek_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Komplek_3.addFeatures(features_Komplek_3);
var lyr_Komplek_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Komplek_3, 
                style: style_Komplek_3,
                popuplayertitle: 'Komplek',
                interactive: true,
                title: '<img src="styles/legend/Komplek_3.png" /> Komplek'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });
var format_Got_5 = new ol.format.GeoJSON();
var features_Got_5 = format_Got_5.readFeatures(json_Got_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Got_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Got_5.addFeatures(features_Got_5);
var lyr_Got_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Got_5, 
                style: style_Got_5,
                popuplayertitle: 'Got',
                interactive: true,
                title: '<img src="styles/legend/Got_5.png" /> Got'
            });
var format_Gang_6 = new ol.format.GeoJSON();
var features_Gang_6 = format_Gang_6.readFeatures(json_Gang_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_6.addFeatures(features_Gang_6);
var lyr_Gang_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_6, 
                style: style_Gang_6,
                popuplayertitle: 'Gang',
                interactive: true,
                title: '<img src="styles/legend/Gang_6.png" /> Gang'
            });
var format_Batas_Wilayah_Glugur_7 = new ol.format.GeoJSON();
var features_Batas_Wilayah_Glugur_7 = format_Batas_Wilayah_Glugur_7.readFeatures(json_Batas_Wilayah_Glugur_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Wilayah_Glugur_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Wilayah_Glugur_7.addFeatures(features_Batas_Wilayah_Glugur_7);
var lyr_Batas_Wilayah_Glugur_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Wilayah_Glugur_7, 
                style: style_Batas_Wilayah_Glugur_7,
                popuplayertitle: 'Batas_Wilayah_Glugur',
                interactive: true,
                title: '<img src="styles/legend/Batas_Wilayah_Glugur_7.png" /> Batas_Wilayah_Glugur'
            });
var format_Vihara_8 = new ol.format.GeoJSON();
var features_Vihara_8 = format_Vihara_8.readFeatures(json_Vihara_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vihara_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vihara_8.addFeatures(features_Vihara_8);
var lyr_Vihara_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vihara_8, 
                style: style_Vihara_8,
                popuplayertitle: 'Vihara',
                interactive: true,
                title: '<img src="styles/legend/Vihara_8.png" /> Vihara'
            });
var format_TanahKosong_9 = new ol.format.GeoJSON();
var features_TanahKosong_9 = format_TanahKosong_9.readFeatures(json_TanahKosong_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TanahKosong_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TanahKosong_9.addFeatures(features_TanahKosong_9);
var lyr_TanahKosong_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TanahKosong_9, 
                style: style_TanahKosong_9,
                popuplayertitle: 'Tanah Kosong',
                interactive: true,
                title: '<img src="styles/legend/TanahKosong_9.png" /> Tanah Kosong'
            });
var format_Swalayan_10 = new ol.format.GeoJSON();
var features_Swalayan_10 = format_Swalayan_10.readFeatures(json_Swalayan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Swalayan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swalayan_10.addFeatures(features_Swalayan_10);
var lyr_Swalayan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Swalayan_10, 
                style: style_Swalayan_10,
                popuplayertitle: 'Swalayan',
                interactive: true,
                title: '<img src="styles/legend/Swalayan_10.png" /> Swalayan'
            });
var format_Sekolah_11 = new ol.format.GeoJSON();
var features_Sekolah_11 = format_Sekolah_11.readFeatures(json_Sekolah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_11.addFeatures(features_Sekolah_11);
var lyr_Sekolah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_11, 
                style: style_Sekolah_11,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_11.png" /> Sekolah'
            });
var format_Rumah_12 = new ol.format.GeoJSON();
var features_Rumah_12 = format_Rumah_12.readFeatures(json_Rumah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_12.addFeatures(features_Rumah_12);
var lyr_Rumah_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_12, 
                style: style_Rumah_12,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_12.png" /> Rumah'
            });
var format_RumahSaya_13 = new ol.format.GeoJSON();
var features_RumahSaya_13 = format_RumahSaya_13.readFeatures(json_RumahSaya_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSaya_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSaya_13.addFeatures(features_RumahSaya_13);
var lyr_RumahSaya_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSaya_13, 
                style: style_RumahSaya_13,
                popuplayertitle: 'Rumah Saya',
                interactive: true,
                title: '<img src="styles/legend/RumahSaya_13.png" /> Rumah Saya'
            });
var format_Ruko_14 = new ol.format.GeoJSON();
var features_Ruko_14 = format_Ruko_14.readFeatures(json_Ruko_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruko_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruko_14.addFeatures(features_Ruko_14);
var lyr_Ruko_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruko_14, 
                style: style_Ruko_14,
                popuplayertitle: 'Ruko',
                interactive: true,
                title: '<img src="styles/legend/Ruko_14.png" /> Ruko'
            });
var format_Restoran_15 = new ol.format.GeoJSON();
var features_Restoran_15 = format_Restoran_15.readFeatures(json_Restoran_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restoran_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restoran_15.addFeatures(features_Restoran_15);
var lyr_Restoran_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restoran_15, 
                style: style_Restoran_15,
                popuplayertitle: 'Restoran',
                interactive: true,
                title: '<img src="styles/legend/Restoran_15.png" /> Restoran'
            });
var format_PLN_16 = new ol.format.GeoJSON();
var features_PLN_16 = format_PLN_16.readFeatures(json_PLN_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLN_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLN_16.addFeatures(features_PLN_16);
var lyr_PLN_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLN_16, 
                style: style_PLN_16,
                popuplayertitle: 'PLN',
                interactive: true,
                title: '<img src="styles/legend/PLN_16.png" /> PLN'
            });
var format_Panti_17 = new ol.format.GeoJSON();
var features_Panti_17 = format_Panti_17.readFeatures(json_Panti_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Panti_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Panti_17.addFeatures(features_Panti_17);
var lyr_Panti_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Panti_17, 
                style: style_Panti_17,
                popuplayertitle: 'Panti',
                interactive: true,
                title: '<img src="styles/legend/Panti_17.png" /> Panti'
            });
var format_Masjid_18 = new ol.format.GeoJSON();
var features_Masjid_18 = format_Masjid_18.readFeatures(json_Masjid_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_18.addFeatures(features_Masjid_18);
var lyr_Masjid_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_18, 
                style: style_Masjid_18,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_18.png" /> Masjid'
            });
var format_LapanganTenis_19 = new ol.format.GeoJSON();
var features_LapanganTenis_19 = format_LapanganTenis_19.readFeatures(json_LapanganTenis_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapanganTenis_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganTenis_19.addFeatures(features_LapanganTenis_19);
var lyr_LapanganTenis_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganTenis_19, 
                style: style_LapanganTenis_19,
                popuplayertitle: 'Lapangan Tenis',
                interactive: true,
                title: '<img src="styles/legend/LapanganTenis_19.png" /> Lapangan Tenis'
            });
var format_Kuburan_20 = new ol.format.GeoJSON();
var features_Kuburan_20 = format_Kuburan_20.readFeatures(json_Kuburan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_20.addFeatures(features_Kuburan_20);
var lyr_Kuburan_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_20, 
                style: style_Kuburan_20,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_20.png" /> Kuburan'
            });
var format_Klinik_21 = new ol.format.GeoJSON();
var features_Klinik_21 = format_Klinik_21.readFeatures(json_Klinik_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klinik_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klinik_21.addFeatures(features_Klinik_21);
var lyr_Klinik_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klinik_21, 
                style: style_Klinik_21,
                popuplayertitle: 'Klinik',
                interactive: true,
                title: '<img src="styles/legend/Klinik_21.png" /> Klinik'
            });
var format_Kantor_22 = new ol.format.GeoJSON();
var features_Kantor_22 = format_Kantor_22.readFeatures(json_Kantor_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantor_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_22.addFeatures(features_Kantor_22);
var lyr_Kantor_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantor_22, 
                style: style_Kantor_22,
                popuplayertitle: 'Kantor',
                interactive: true,
                title: '<img src="styles/legend/Kantor_22.png" /> Kantor'
            });
var format_KantorLurah_23 = new ol.format.GeoJSON();
var features_KantorLurah_23 = format_KantorLurah_23.readFeatures(json_KantorLurah_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorLurah_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorLurah_23.addFeatures(features_KantorLurah_23);
var lyr_KantorLurah_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorLurah_23, 
                style: style_KantorLurah_23,
                popuplayertitle: 'Kantor Lurah',
                interactive: true,
                title: '<img src="styles/legend/KantorLurah_23.png" /> Kantor Lurah'
            });
var format_Kampus_24 = new ol.format.GeoJSON();
var features_Kampus_24 = format_Kampus_24.readFeatures(json_Kampus_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kampus_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kampus_24.addFeatures(features_Kampus_24);
var lyr_Kampus_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kampus_24, 
                style: style_Kampus_24,
                popuplayertitle: 'Kampus',
                interactive: true,
                title: '<img src="styles/legend/Kampus_24.png" /> Kampus'
            });
var format_Gudang_25 = new ol.format.GeoJSON();
var features_Gudang_25 = format_Gudang_25.readFeatures(json_Gudang_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gudang_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gudang_25.addFeatures(features_Gudang_25);
var lyr_Gudang_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gudang_25, 
                style: style_Gudang_25,
                popuplayertitle: 'Gudang',
                interactive: true,
                title: '<img src="styles/legend/Gudang_25.png" /> Gudang'
            });
var format_GorBadminton_26 = new ol.format.GeoJSON();
var features_GorBadminton_26 = format_GorBadminton_26.readFeatures(json_GorBadminton_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GorBadminton_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GorBadminton_26.addFeatures(features_GorBadminton_26);
var lyr_GorBadminton_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GorBadminton_26, 
                style: style_GorBadminton_26,
                popuplayertitle: 'Gor Badminton',
                interactive: true,
                title: '<img src="styles/legend/GorBadminton_26.png" /> Gor Badminton'
            });
var format_CuciMobil_27 = new ol.format.GeoJSON();
var features_CuciMobil_27 = format_CuciMobil_27.readFeatures(json_CuciMobil_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuciMobil_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuciMobil_27.addFeatures(features_CuciMobil_27);
var lyr_CuciMobil_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuciMobil_27, 
                style: style_CuciMobil_27,
                popuplayertitle: 'Cuci Mobil',
                interactive: true,
                title: '<img src="styles/legend/CuciMobil_27.png" /> Cuci Mobil'
            });
var format_vihara1_28 = new ol.format.GeoJSON();
var features_vihara1_28 = format_vihara1_28.readFeatures(json_vihara1_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vihara1_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vihara1_28.addFeatures(features_vihara1_28);
var lyr_vihara1_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vihara1_28, 
                style: style_vihara1_28,
                popuplayertitle: 'vihara1',
                interactive: true,
                title: '<img src="styles/legend/vihara1_28.png" /> vihara1'
            });
var format_tanahkosong1_29 = new ol.format.GeoJSON();
var features_tanahkosong1_29 = format_tanahkosong1_29.readFeatures(json_tanahkosong1_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tanahkosong1_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tanahkosong1_29.addFeatures(features_tanahkosong1_29);
var lyr_tanahkosong1_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tanahkosong1_29, 
                style: style_tanahkosong1_29,
                popuplayertitle: 'tanahkosong1',
                interactive: true,
                title: '<img src="styles/legend/tanahkosong1_29.png" /> tanahkosong1'
            });
var format_swalayan1_30 = new ol.format.GeoJSON();
var features_swalayan1_30 = format_swalayan1_30.readFeatures(json_swalayan1_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_swalayan1_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_swalayan1_30.addFeatures(features_swalayan1_30);
var lyr_swalayan1_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_swalayan1_30, 
                style: style_swalayan1_30,
                popuplayertitle: 'swalayan1',
                interactive: true,
                title: '<img src="styles/legend/swalayan1_30.png" /> swalayan1'
            });
var format_sekolah1_31 = new ol.format.GeoJSON();
var features_sekolah1_31 = format_sekolah1_31.readFeatures(json_sekolah1_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah1_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah1_31.addFeatures(features_sekolah1_31);
var lyr_sekolah1_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah1_31, 
                style: style_sekolah1_31,
                popuplayertitle: 'sekolah1',
                interactive: true,
                title: '<img src="styles/legend/sekolah1_31.png" /> sekolah1'
            });
var format_rumahsaya1_32 = new ol.format.GeoJSON();
var features_rumahsaya1_32 = format_rumahsaya1_32.readFeatures(json_rumahsaya1_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahsaya1_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahsaya1_32.addFeatures(features_rumahsaya1_32);
var lyr_rumahsaya1_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahsaya1_32, 
                style: style_rumahsaya1_32,
                popuplayertitle: 'rumahsaya1',
                interactive: true,
                title: '<img src="styles/legend/rumahsaya1_32.png" /> rumahsaya1'
            });
var format_rumah1_33 = new ol.format.GeoJSON();
var features_rumah1_33 = format_rumah1_33.readFeatures(json_rumah1_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah1_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah1_33.addFeatures(features_rumah1_33);
var lyr_rumah1_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah1_33, 
                style: style_rumah1_33,
                popuplayertitle: 'rumah1',
                interactive: true,
                title: '<img src="styles/legend/rumah1_33.png" /> rumah1'
            });
var format_ruko1_34 = new ol.format.GeoJSON();
var features_ruko1_34 = format_ruko1_34.readFeatures(json_ruko1_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ruko1_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ruko1_34.addFeatures(features_ruko1_34);
var lyr_ruko1_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ruko1_34, 
                style: style_ruko1_34,
                popuplayertitle: 'ruko1',
                interactive: true,
                title: '<img src="styles/legend/ruko1_34.png" /> ruko1'
            });
var format_restoran1_35 = new ol.format.GeoJSON();
var features_restoran1_35 = format_restoran1_35.readFeatures(json_restoran1_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restoran1_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restoran1_35.addFeatures(features_restoran1_35);
var lyr_restoran1_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restoran1_35, 
                style: style_restoran1_35,
                popuplayertitle: 'restoran1',
                interactive: true,
                title: '<img src="styles/legend/restoran1_35.png" /> restoran1'
            });
var format_PLN1_36 = new ol.format.GeoJSON();
var features_PLN1_36 = format_PLN1_36.readFeatures(json_PLN1_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLN1_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLN1_36.addFeatures(features_PLN1_36);
var lyr_PLN1_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLN1_36, 
                style: style_PLN1_36,
                popuplayertitle: 'PLN1',
                interactive: true,
                title: '<img src="styles/legend/PLN1_36.png" /> PLN1'
            });
var format_panti1_37 = new ol.format.GeoJSON();
var features_panti1_37 = format_panti1_37.readFeatures(json_panti1_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_panti1_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_panti1_37.addFeatures(features_panti1_37);
var lyr_panti1_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_panti1_37, 
                style: style_panti1_37,
                popuplayertitle: 'panti1',
                interactive: true,
                title: '<img src="styles/legend/panti1_37.png" /> panti1'
            });
var format_masjid1_38 = new ol.format.GeoJSON();
var features_masjid1_38 = format_masjid1_38.readFeatures(json_masjid1_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjid1_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid1_38.addFeatures(features_masjid1_38);
var lyr_masjid1_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid1_38, 
                style: style_masjid1_38,
                popuplayertitle: 'masjid1',
                interactive: true,
                title: '<img src="styles/legend/masjid1_38.png" /> masjid1'
            });
var format_lapangantenis1_39 = new ol.format.GeoJSON();
var features_lapangantenis1_39 = format_lapangantenis1_39.readFeatures(json_lapangantenis1_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangantenis1_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangantenis1_39.addFeatures(features_lapangantenis1_39);
var lyr_lapangantenis1_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangantenis1_39, 
                style: style_lapangantenis1_39,
                popuplayertitle: 'lapangantenis1',
                interactive: true,
                title: '<img src="styles/legend/lapangantenis1_39.png" /> lapangantenis1'
            });
var format_kuburan1_40 = new ol.format.GeoJSON();
var features_kuburan1_40 = format_kuburan1_40.readFeatures(json_kuburan1_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuburan1_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuburan1_40.addFeatures(features_kuburan1_40);
var lyr_kuburan1_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuburan1_40, 
                style: style_kuburan1_40,
                popuplayertitle: 'kuburan1',
                interactive: true,
                title: '<img src="styles/legend/kuburan1_40.png" /> kuburan1'
            });
var format_klinik1_41 = new ol.format.GeoJSON();
var features_klinik1_41 = format_klinik1_41.readFeatures(json_klinik1_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_klinik1_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_klinik1_41.addFeatures(features_klinik1_41);
var lyr_klinik1_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_klinik1_41, 
                style: style_klinik1_41,
                popuplayertitle: 'klinik1',
                interactive: true,
                title: '<img src="styles/legend/klinik1_41.png" /> klinik1'
            });
var format_kantorlurah1_42 = new ol.format.GeoJSON();
var features_kantorlurah1_42 = format_kantorlurah1_42.readFeatures(json_kantorlurah1_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantorlurah1_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantorlurah1_42.addFeatures(features_kantorlurah1_42);
var lyr_kantorlurah1_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantorlurah1_42, 
                style: style_kantorlurah1_42,
                popuplayertitle: 'kantorlurah1',
                interactive: true,
                title: '<img src="styles/legend/kantorlurah1_42.png" /> kantorlurah1'
            });
var format_kantor1_43 = new ol.format.GeoJSON();
var features_kantor1_43 = format_kantor1_43.readFeatures(json_kantor1_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantor1_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantor1_43.addFeatures(features_kantor1_43);
var lyr_kantor1_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantor1_43, 
                style: style_kantor1_43,
                popuplayertitle: 'kantor1',
                interactive: true,
                title: '<img src="styles/legend/kantor1_43.png" /> kantor1'
            });
var format_kampus1_44 = new ol.format.GeoJSON();
var features_kampus1_44 = format_kampus1_44.readFeatures(json_kampus1_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kampus1_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kampus1_44.addFeatures(features_kampus1_44);
var lyr_kampus1_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kampus1_44, 
                style: style_kampus1_44,
                popuplayertitle: 'kampus1',
                interactive: true,
                title: '<img src="styles/legend/kampus1_44.png" /> kampus1'
            });
var format_gudang1_45 = new ol.format.GeoJSON();
var features_gudang1_45 = format_gudang1_45.readFeatures(json_gudang1_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gudang1_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gudang1_45.addFeatures(features_gudang1_45);
var lyr_gudang1_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gudang1_45, 
                style: style_gudang1_45,
                popuplayertitle: 'gudang1',
                interactive: true,
                title: '<img src="styles/legend/gudang1_45.png" /> gudang1'
            });
var format_gorbadminton1_46 = new ol.format.GeoJSON();
var features_gorbadminton1_46 = format_gorbadminton1_46.readFeatures(json_gorbadminton1_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gorbadminton1_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gorbadminton1_46.addFeatures(features_gorbadminton1_46);
var lyr_gorbadminton1_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gorbadminton1_46, 
                style: style_gorbadminton1_46,
                popuplayertitle: 'gorbadminton1',
                interactive: true,
                title: '<img src="styles/legend/gorbadminton1_46.png" /> gorbadminton1'
            });
var format_cucimobil1_47 = new ol.format.GeoJSON();
var features_cucimobil1_47 = format_cucimobil1_47.readFeatures(json_cucimobil1_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cucimobil1_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cucimobil1_47.addFeatures(features_cucimobil1_47);
var lyr_cucimobil1_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cucimobil1_47, 
                style: style_cucimobil1_47,
                popuplayertitle: 'cucimobil1',
                interactive: true,
                title: '<img src="styles/legend/cucimobil1_47.png" /> cucimobil1'
            });

lyr_Google_0.setVisible(true);lyr_Sungai_1.setVisible(true);lyr_Lorong_2.setVisible(true);lyr_Komplek_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_Got_5.setVisible(true);lyr_Gang_6.setVisible(true);lyr_Batas_Wilayah_Glugur_7.setVisible(true);lyr_Vihara_8.setVisible(true);lyr_TanahKosong_9.setVisible(true);lyr_Swalayan_10.setVisible(true);lyr_Sekolah_11.setVisible(true);lyr_Rumah_12.setVisible(true);lyr_RumahSaya_13.setVisible(true);lyr_Ruko_14.setVisible(true);lyr_Restoran_15.setVisible(true);lyr_PLN_16.setVisible(true);lyr_Panti_17.setVisible(true);lyr_Masjid_18.setVisible(true);lyr_LapanganTenis_19.setVisible(true);lyr_Kuburan_20.setVisible(true);lyr_Klinik_21.setVisible(true);lyr_Kantor_22.setVisible(true);lyr_KantorLurah_23.setVisible(true);lyr_Kampus_24.setVisible(true);lyr_Gudang_25.setVisible(true);lyr_GorBadminton_26.setVisible(true);lyr_CuciMobil_27.setVisible(true);lyr_vihara1_28.setVisible(true);lyr_tanahkosong1_29.setVisible(true);lyr_swalayan1_30.setVisible(true);lyr_sekolah1_31.setVisible(true);lyr_rumahsaya1_32.setVisible(true);lyr_rumah1_33.setVisible(true);lyr_ruko1_34.setVisible(true);lyr_restoran1_35.setVisible(true);lyr_PLN1_36.setVisible(true);lyr_panti1_37.setVisible(true);lyr_masjid1_38.setVisible(true);lyr_lapangantenis1_39.setVisible(true);lyr_kuburan1_40.setVisible(true);lyr_klinik1_41.setVisible(true);lyr_kantorlurah1_42.setVisible(true);lyr_kantor1_43.setVisible(true);lyr_kampus1_44.setVisible(true);lyr_gudang1_45.setVisible(true);lyr_gorbadminton1_46.setVisible(true);lyr_cucimobil1_47.setVisible(true);
var layersList = [lyr_Google_0,lyr_Sungai_1,lyr_Lorong_2,lyr_Komplek_3,lyr_Jalan_4,lyr_Got_5,lyr_Gang_6,lyr_Batas_Wilayah_Glugur_7,lyr_Vihara_8,lyr_TanahKosong_9,lyr_Swalayan_10,lyr_Sekolah_11,lyr_Rumah_12,lyr_RumahSaya_13,lyr_Ruko_14,lyr_Restoran_15,lyr_PLN_16,lyr_Panti_17,lyr_Masjid_18,lyr_LapanganTenis_19,lyr_Kuburan_20,lyr_Klinik_21,lyr_Kantor_22,lyr_KantorLurah_23,lyr_Kampus_24,lyr_Gudang_25,lyr_GorBadminton_26,lyr_CuciMobil_27,lyr_vihara1_28,lyr_tanahkosong1_29,lyr_swalayan1_30,lyr_sekolah1_31,lyr_rumahsaya1_32,lyr_rumah1_33,lyr_ruko1_34,lyr_restoran1_35,lyr_PLN1_36,lyr_panti1_37,lyr_masjid1_38,lyr_lapangantenis1_39,lyr_kuburan1_40,lyr_klinik1_41,lyr_kantorlurah1_42,lyr_kantor1_43,lyr_kampus1_44,lyr_gudang1_45,lyr_gorbadminton1_46,lyr_cucimobil1_47];
lyr_Sungai_1.set('fieldAliases', {'Id': 'Id', 'Nm_Sungai': 'Nm_Sungai', 'Panjang': 'Panjang', 'Lebar': 'Lebar', });
lyr_Lorong_2.set('fieldAliases', {'Id': 'Id', 'Nm_Lorong': 'Nm_Lorong', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Status_Jal': 'Status_Jal', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', });
lyr_Komplek_3.set('fieldAliases', {'Id': 'Id', 'Nm_Komplek': 'Nm_Komplek', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Status_Jal': 'Status_Jal', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', });
lyr_Jalan_4.set('fieldAliases', {'Id': 'Id', 'Nama_Jalan': 'Nama_Jalan', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Status_Jal': 'Status_Jal', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', });
lyr_Got_5.set('fieldAliases', {'Id': 'Id', 'Nama_Got': 'Nama_Got', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Bentuk': 'Bentuk', });
lyr_Gang_6.set('fieldAliases', {'Id': 'Id', 'Nama_Gang': 'Nama_Gang', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Status_Jal': 'Status_Jal', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', });
lyr_Batas_Wilayah_Glugur_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_Vihara_8.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', });
lyr_TanahKosong_9.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns__Tanam': 'Jns__Tanam', 'Pre_Jlmh': 'Pre_Jlmh', 'Jns_Irigas': 'Jns_Irigas', 'Luas_Lahan': 'Luas_Lahan', 'Status': 'Status', });
lyr_Swalayan_10.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Usaha': 'Jns_Usaha', 'StatusUsah': 'StatusUsah', 'Luas_Bang': 'Luas_Bang', 'Luas_Lahan': 'Luas_Lahan', 'Luas_Ban': 'Luas_Ban', 'Luas_Tan': 'Luas_Tan', });
lyr_Sekolah_11.set('fieldAliases', {'Id': 'Id', 'Nm_Sekolah': 'Nm_Sekolah', 'Nm_Kepsek': 'Nm_Kepsek', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', 'Luas_Ban': 'Luas_Ban', 'Luas_Tan': 'Luas_Tan', });
lyr_Rumah_12.set('fieldAliases', {'Id': 'Id', 'No_Rumah': 'No_Rumah', 'Status_Kpm': 'Status_Kpm', 'Jns_Bangun': 'Jns_Bangun', 'Jns_Lantai': 'Jns_Lantai', 'Nm_KK_Peng': 'Nm_KK_Peng', 'Pend_Terak': 'Pend_Terak', 'Pekerjaan': 'Pekerjaan', 'No_Telp': 'No_Telp', 'No_KTP': 'No_KTP', 'Jmlh_Laki2': 'Jmlh_Laki2', 'Jmlh_Perem': 'Jmlh_Perem', 'Total_Huni': 'Total_Huni', 'Luas_Bang': 'Luas_Bang', 'Luas_Ban': 'Luas_Ban', });
lyr_RumahSaya_13.set('fieldAliases', {'Id': 'Id', 'No_Rumah': 'No_Rumah', 'Status_Kep': 'Status_Kep', 'Jns_Bangun': 'Jns_Bangun', 'Jns_Lantai': 'Jns_Lantai', 'Nama_KK_Pe': 'Nama_KK_Pe', 'Pend_Terak': 'Pend_Terak', 'Pekerjaan': 'Pekerjaan', 'No_Telp': 'No_Telp', 'No_KTP': 'No_KTP', 'Jmlh_Laki2': 'Jmlh_Laki2', 'Jmlh_Perem': 'Jmlh_Perem', 'Total_Huni': 'Total_Huni', 'Luas_Bang': 'Luas_Bang', });
lyr_Ruko_14.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Usaha': 'Jns_Usaha', 'StatusUsah': 'StatusUsah', 'Luas_Bang': 'Luas_Bang', });
lyr_Restoran_15.set('fieldAliases', {'Id': 'Id', 'Nama_Resto': 'Nama_Resto', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bangu': 'Luas_Bangu', });
lyr_PLN_16.set('fieldAliases', {'Id': 'Id', 'Nm_PLN': 'Nm_PLN', 'Kepala_PLN': 'Kepala_PLN', 'Luas_Bang': 'Luas_Bang', });
lyr_Panti_17.set('fieldAliases', {'Id': 'Id', 'Nm_Panti': 'Nm_Panti', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bang': 'Luas_Bang', });
lyr_Masjid_18.set('fieldAliases', {'Id': 'Id', 'Nm_Mesjid': 'Nm_Mesjid', 'Nm_ImamMas': 'Nm_ImamMas', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', });
lyr_LapanganTenis_19.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Kegiat': 'Jns_Kegiat', 'Luas_Lahan': 'Luas_Lahan', 'Luas_Bang': 'Luas_Bang', });
lyr_Kuburan_20.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Lahan': 'Luas_Lahan', });
lyr_Klinik_21.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', });
lyr_Kantor_22.set('fieldAliases', {'Id': 'Id', 'Nm_Kantor': 'Nm_Kantor', 'Nm_KpKanto': 'Nm_KpKanto', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', });
lyr_KantorLurah_23.set('fieldAliases', {'Id': 'Id', 'Nm_Kantor': 'Nm_Kantor', 'Nm_Kepala': 'Nm_Kepala', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', });
lyr_Kampus_24.set('fieldAliases', {'Id': 'Id', 'Nm_Kampus': 'Nm_Kampus', 'Nm_Direktu': 'Nm_Direktu', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', });
lyr_Gudang_25.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bang': 'Luas_Bang', });
lyr_GorBadminton_26.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Kegiat': 'Jns_Kegiat', 'Luas_Bang': 'Luas_Bang', 'Luas_Lahan': 'Luas_Lahan', });
lyr_CuciMobil_27.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', });
lyr_vihara1_28.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_tanahkosong1_29.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns__Tanam': 'Jns__Tanam', 'Pre_Jlmh': 'Pre_Jlmh', 'Jns_Irigas': 'Jns_Irigas', 'Luas_Lahan': 'Luas_Lahan', 'Status': 'Status', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_swalayan1_30.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Usaha': 'Jns_Usaha', 'StatusUsah': 'StatusUsah', 'Luas_Ban': 'Luas_Ban', 'Luas_Tan': 'Luas_Tan', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_sekolah1_31.set('fieldAliases', {'Id': 'Id', 'Nm_Sekolah': 'Nm_Sekolah', 'Nm_Kepsek': 'Nm_Kepsek', 'No_Contact': 'No_Contact', 'Luas_Ban': 'Luas_Ban', 'Luas_Tan': 'Luas_Tan', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_rumahsaya1_32.set('fieldAliases', {'Id': 'Id', 'No_Rumah': 'No_Rumah', 'Status_Kep': 'Status_Kep', 'Jns_Bangun': 'Jns_Bangun', 'Jns_Lantai': 'Jns_Lantai', 'Nama_KK_Pe': 'Nama_KK_Pe', 'Pend_Terak': 'Pend_Terak', 'Pekerjaan': 'Pekerjaan', 'No_Telp': 'No_Telp', 'No_KTP': 'No_KTP', 'Jmlh_Laki2': 'Jmlh_Laki2', 'Jmlh_Perem': 'Jmlh_Perem', 'Total_Huni': 'Total_Huni', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_rumah1_33.set('fieldAliases', {'Id': 'Id', 'No_Rumah': 'No_Rumah', 'Status_Kpm': 'Status_Kpm', 'Jns_Bangun': 'Jns_Bangun', 'Jns_Lantai': 'Jns_Lantai', 'Nm_KK_Peng': 'Nm_KK_Peng', 'Pend_Terak': 'Pend_Terak', 'Pekerjaan': 'Pekerjaan', 'No_Telp': 'No_Telp', 'No_KTP': 'No_KTP', 'Jmlh_Laki2': 'Jmlh_Laki2', 'Jmlh_Perem': 'Jmlh_Perem', 'Total_Huni': 'Total_Huni', 'Luas_Ban': 'Luas_Ban', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_ruko1_34.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Usaha': 'Jns_Usaha', 'StatusUsah': 'StatusUsah', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_restoran1_35.set('fieldAliases', {'Id': 'Id', 'Nama_Resto': 'Nama_Resto', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bangu': 'Luas_Bangu', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_PLN1_36.set('fieldAliases', {'Id': 'Id', 'Nm_PLN': 'Nm_PLN', 'Kepala_PLN': 'Kepala_PLN', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_panti1_37.set('fieldAliases', {'Id': 'Id', 'Nm_Panti': 'Nm_Panti', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_masjid1_38.set('fieldAliases', {'Id': 'Id', 'Nm_Mesjid': 'Nm_Mesjid', 'Nm_ImamMas': 'Nm_ImamMas', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_lapangantenis1_39.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Kegiat': 'Jns_Kegiat', 'Luas_Lahan': 'Luas_Lahan', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_kuburan1_40.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Lahan': 'Luas_Lahan', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_klinik1_41.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_kantorlurah1_42.set('fieldAliases', {'Id': 'Id', 'Nm_Kantor': 'Nm_Kantor', 'Nm_Kepala': 'Nm_Kepala', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_kantor1_43.set('fieldAliases', {'Id': 'Id', 'Nm_Kantor': 'Nm_Kantor', 'Nm_KpKanto': 'Nm_KpKanto', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_kampus1_44.set('fieldAliases', {'Id': 'Id', 'Nm_Kampus': 'Nm_Kampus', 'Nm_Direktu': 'Nm_Direktu', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_gudang1_45.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'Luas_Bang': 'Luas_Bang', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_gorbadminton1_46.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Jns_Kegiat': 'Jns_Kegiat', 'Luas_Bang': 'Luas_Bang', 'Luas_Lahan': 'Luas_Lahan', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_cucimobil1_47.set('fieldAliases', {'Id': 'Id', 'Nm_Pemilik': 'Nm_Pemilik', 'No_Contact': 'No_Contact', 'Luas_Bang': 'Luas_Bang', 'Luas_Tanah': 'Luas_Tanah', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_Sungai_1.set('fieldImages', {'Id': '', 'Nm_Sungai': '', 'Panjang': '', 'Lebar': '', });
lyr_Lorong_2.set('fieldImages', {'Id': '', 'Nm_Lorong': '', 'Panjang': '', 'Lebar': '', 'Status_Jal': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_Perbai': '', });
lyr_Komplek_3.set('fieldImages', {'Id': '', 'Nm_Komplek': '', 'Panjang': '', 'Lebar': '', 'Status_Jal': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_Perbai': '', });
lyr_Jalan_4.set('fieldImages', {'Id': '', 'Nama_Jalan': '', 'Panjang': '', 'Lebar': '', 'Status_Jal': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_Perbai': '', });
lyr_Got_5.set('fieldImages', {'Id': '', 'Nama_Got': '', 'Panjang': '', 'Lebar': '', 'Bentuk': '', });
lyr_Gang_6.set('fieldImages', {'Id': '', 'Nama_Gang': '', 'Panjang': '', 'Lebar': '', 'Status_Jal': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_Perbai': '', });
lyr_Batas_Wilayah_Glugur_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_Vihara_8.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', });
lyr_TanahKosong_9.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns__Tanam': 'TextEdit', 'Pre_Jlmh': 'TextEdit', 'Jns_Irigas': 'TextEdit', 'Luas_Lahan': 'TextEdit', 'Status': 'TextEdit', });
lyr_Swalayan_10.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Usaha': 'TextEdit', 'StatusUsah': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Lahan': 'TextEdit', 'Luas_Ban': 'Range', 'Luas_Tan': 'Range', });
lyr_Sekolah_11.set('fieldImages', {'Id': 'Range', 'Nm_Sekolah': 'TextEdit', 'Nm_Kepsek': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Tanah': 'TextEdit', 'Luas_Ban': 'Range', 'Luas_Tan': 'Range', });
lyr_Rumah_12.set('fieldImages', {'Id': 'Range', 'No_Rumah': 'TextEdit', 'Status_Kpm': 'TextEdit', 'Jns_Bangun': 'TextEdit', 'Jns_Lantai': 'TextEdit', 'Nm_KK_Peng': 'TextEdit', 'Pend_Terak': 'TextEdit', 'Pekerjaan': 'TextEdit', 'No_Telp': 'TextEdit', 'No_KTP': 'TextEdit', 'Jmlh_Laki2': 'TextEdit', 'Jmlh_Perem': 'TextEdit', 'Total_Huni': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Ban': 'Range', });
lyr_RumahSaya_13.set('fieldImages', {'Id': 'Range', 'No_Rumah': 'TextEdit', 'Status_Kep': 'TextEdit', 'Jns_Bangun': 'TextEdit', 'Jns_Lantai': 'TextEdit', 'Nama_KK_Pe': 'TextEdit', 'Pend_Terak': 'TextEdit', 'Pekerjaan': 'TextEdit', 'No_Telp': 'TextEdit', 'No_KTP': 'TextEdit', 'Jmlh_Laki2': 'TextEdit', 'Jmlh_Perem': 'TextEdit', 'Total_Huni': 'TextEdit', 'Luas_Bang': 'TextEdit', });
lyr_Ruko_14.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Usaha': 'TextEdit', 'StatusUsah': 'TextEdit', 'Luas_Bang': 'TextEdit', });
lyr_Restoran_15.set('fieldImages', {'Id': 'Range', 'Nama_Resto': 'TextEdit', 'Nm_Pemilik': 'TextEdit', 'Luas_Bangu': 'Range', });
lyr_PLN_16.set('fieldImages', {'Id': 'Range', 'Nm_PLN': 'TextEdit', 'Kepala_PLN': 'TextEdit', 'Luas_Bang': 'Range', });
lyr_Panti_17.set('fieldImages', {'Id': 'Range', 'Nm_Panti': 'TextEdit', 'Nm_Pemilik': 'TextEdit', 'Luas_Bang': 'Range', });
lyr_Masjid_18.set('fieldImages', {'Id': 'Range', 'Nm_Mesjid': 'TextEdit', 'Nm_ImamMas': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'Range', 'Luas_Tanah': 'Range', });
lyr_LapanganTenis_19.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Kegiat': 'TextEdit', 'Luas_Lahan': 'TextEdit', 'Luas_Bang': 'TextEdit', });
lyr_Kuburan_20.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Lahan': 'TextEdit', });
lyr_Klinik_21.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', });
lyr_Kantor_22.set('fieldImages', {'Id': 'Range', 'Nm_Kantor': 'TextEdit', 'Nm_KpKanto': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'Range', 'Luas_Tanah': 'Range', });
lyr_KantorLurah_23.set('fieldImages', {'Id': 'Range', 'Nm_Kantor': 'TextEdit', 'Nm_Kepala': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'Range', });
lyr_Kampus_24.set('fieldImages', {'Id': 'Range', 'Nm_Kampus': 'TextEdit', 'Nm_Direktu': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Tanah': 'TextEdit', });
lyr_Gudang_25.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'Luas_Bang': 'TextEdit', });
lyr_GorBadminton_26.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Kegiat': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Lahan': 'TextEdit', });
lyr_CuciMobil_27.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Tanah': 'TextEdit', });
lyr_vihara1_28.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_tanahkosong1_29.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns__Tanam': 'TextEdit', 'Pre_Jlmh': 'TextEdit', 'Jns_Irigas': 'TextEdit', 'Luas_Lahan': 'TextEdit', 'Status': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_swalayan1_30.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Usaha': 'TextEdit', 'StatusUsah': 'TextEdit', 'Luas_Ban': 'Range', 'Luas_Tan': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_sekolah1_31.set('fieldImages', {'Id': 'Range', 'Nm_Sekolah': 'TextEdit', 'Nm_Kepsek': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Ban': 'Range', 'Luas_Tan': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_rumahsaya1_32.set('fieldImages', {'Id': 'Range', 'No_Rumah': 'TextEdit', 'Status_Kep': 'TextEdit', 'Jns_Bangun': 'TextEdit', 'Jns_Lantai': 'TextEdit', 'Nama_KK_Pe': 'TextEdit', 'Pend_Terak': 'TextEdit', 'Pekerjaan': 'TextEdit', 'No_Telp': 'TextEdit', 'No_KTP': 'TextEdit', 'Jmlh_Laki2': 'TextEdit', 'Jmlh_Perem': 'TextEdit', 'Total_Huni': 'TextEdit', 'Luas_Bang': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_rumah1_33.set('fieldImages', {'Id': 'Range', 'No_Rumah': 'TextEdit', 'Status_Kpm': 'TextEdit', 'Jns_Bangun': 'TextEdit', 'Jns_Lantai': 'TextEdit', 'Nm_KK_Peng': 'TextEdit', 'Pend_Terak': 'TextEdit', 'Pekerjaan': 'TextEdit', 'No_Telp': 'TextEdit', 'No_KTP': 'TextEdit', 'Jmlh_Laki2': 'TextEdit', 'Jmlh_Perem': 'TextEdit', 'Total_Huni': 'TextEdit', 'Luas_Ban': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_ruko1_34.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Usaha': 'TextEdit', 'StatusUsah': 'TextEdit', 'Luas_Bang': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_restoran1_35.set('fieldImages', {'Id': 'Range', 'Nama_Resto': 'TextEdit', 'Nm_Pemilik': 'TextEdit', 'Luas_Bangu': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PLN1_36.set('fieldImages', {'Id': 'Range', 'Nm_PLN': 'TextEdit', 'Kepala_PLN': 'TextEdit', 'Luas_Bang': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_panti1_37.set('fieldImages', {'Id': 'Range', 'Nm_Panti': 'TextEdit', 'Nm_Pemilik': 'TextEdit', 'Luas_Bang': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_masjid1_38.set('fieldImages', {'Id': 'Range', 'Nm_Mesjid': 'TextEdit', 'Nm_ImamMas': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'Range', 'Luas_Tanah': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_lapangantenis1_39.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Kegiat': 'TextEdit', 'Luas_Lahan': 'TextEdit', 'Luas_Bang': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_kuburan1_40.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Lahan': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_klinik1_41.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_kantorlurah1_42.set('fieldImages', {'Id': 'Range', 'Nm_Kantor': 'TextEdit', 'Nm_Kepala': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_kantor1_43.set('fieldImages', {'Id': 'Range', 'Nm_Kantor': 'TextEdit', 'Nm_KpKanto': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'Range', 'Luas_Tanah': 'Range', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_kampus1_44.set('fieldImages', {'Id': 'Range', 'Nm_Kampus': 'TextEdit', 'Nm_Direktu': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Tanah': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_gudang1_45.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'Luas_Bang': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_gorbadminton1_46.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Jns_Kegiat': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Lahan': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_cucimobil1_47.set('fieldImages', {'Id': 'Range', 'Nm_Pemilik': 'TextEdit', 'No_Contact': 'TextEdit', 'Luas_Bang': 'TextEdit', 'Luas_Tanah': 'TextEdit', 'ORIG_FID': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Sungai_1.set('fieldLabels', {'Id': 'no label', 'Nm_Sungai': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', });
lyr_Lorong_2.set('fieldLabels', {'Id': 'no label', 'Nm_Lorong': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Status_Jal': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', });
lyr_Komplek_3.set('fieldLabels', {'Id': 'no label', 'Nm_Komplek': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Status_Jal': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'Id': 'no label', 'Nama_Jalan': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Status_Jal': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', });
lyr_Got_5.set('fieldLabels', {'Id': 'no label', 'Nama_Got': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Bentuk': 'no label', });
lyr_Gang_6.set('fieldLabels', {'Id': 'no label', 'Nama_Gang': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Status_Jal': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', });
lyr_Batas_Wilayah_Glugur_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_Vihara_8.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', });
lyr_TanahKosong_9.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns__Tanam': 'no label', 'Pre_Jlmh': 'no label', 'Jns_Irigas': 'no label', 'Luas_Lahan': 'no label', 'Status': 'no label', });
lyr_Swalayan_10.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Usaha': 'no label', 'StatusUsah': 'no label', 'Luas_Bang': 'no label', 'Luas_Lahan': 'no label', 'Luas_Ban': 'no label', 'Luas_Tan': 'no label', });
lyr_Sekolah_11.set('fieldLabels', {'Id': 'no label', 'Nm_Sekolah': 'no label', 'Nm_Kepsek': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', 'Luas_Ban': 'no label', 'Luas_Tan': 'no label', });
lyr_Rumah_12.set('fieldLabels', {'Id': 'no label', 'No_Rumah': 'no label', 'Status_Kpm': 'no label', 'Jns_Bangun': 'no label', 'Jns_Lantai': 'no label', 'Nm_KK_Peng': 'no label', 'Pend_Terak': 'no label', 'Pekerjaan': 'no label', 'No_Telp': 'no label', 'No_KTP': 'no label', 'Jmlh_Laki2': 'no label', 'Jmlh_Perem': 'no label', 'Total_Huni': 'no label', 'Luas_Bang': 'no label', 'Luas_Ban': 'no label', });
lyr_RumahSaya_13.set('fieldLabels', {'Id': 'no label', 'No_Rumah': 'no label', 'Status_Kep': 'no label', 'Jns_Bangun': 'no label', 'Jns_Lantai': 'no label', 'Nama_KK_Pe': 'no label', 'Pend_Terak': 'no label', 'Pekerjaan': 'no label', 'No_Telp': 'no label', 'No_KTP': 'no label', 'Jmlh_Laki2': 'no label', 'Jmlh_Perem': 'no label', 'Total_Huni': 'no label', 'Luas_Bang': 'no label', });
lyr_Ruko_14.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Usaha': 'no label', 'StatusUsah': 'no label', 'Luas_Bang': 'no label', });
lyr_Restoran_15.set('fieldLabels', {'Id': 'no label', 'Nama_Resto': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bangu': 'no label', });
lyr_PLN_16.set('fieldLabels', {'Id': 'no label', 'Nm_PLN': 'no label', 'Kepala_PLN': 'no label', 'Luas_Bang': 'no label', });
lyr_Panti_17.set('fieldLabels', {'Id': 'no label', 'Nm_Panti': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bang': 'no label', });
lyr_Masjid_18.set('fieldLabels', {'Id': 'no label', 'Nm_Mesjid': 'no label', 'Nm_ImamMas': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', });
lyr_LapanganTenis_19.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Kegiat': 'no label', 'Luas_Lahan': 'no label', 'Luas_Bang': 'no label', });
lyr_Kuburan_20.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Lahan': 'no label', });
lyr_Klinik_21.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', });
lyr_Kantor_22.set('fieldLabels', {'Id': 'no label', 'Nm_Kantor': 'no label', 'Nm_KpKanto': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', });
lyr_KantorLurah_23.set('fieldLabels', {'Id': 'no label', 'Nm_Kantor': 'no label', 'Nm_Kepala': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', });
lyr_Kampus_24.set('fieldLabels', {'Id': 'no label', 'Nm_Kampus': 'no label', 'Nm_Direktu': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', });
lyr_Gudang_25.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bang': 'no label', });
lyr_GorBadminton_26.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Kegiat': 'no label', 'Luas_Bang': 'no label', 'Luas_Lahan': 'no label', });
lyr_CuciMobil_27.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', });
lyr_vihara1_28.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_tanahkosong1_29.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns__Tanam': 'no label', 'Pre_Jlmh': 'no label', 'Jns_Irigas': 'no label', 'Luas_Lahan': 'no label', 'Status': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_swalayan1_30.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Usaha': 'no label', 'StatusUsah': 'no label', 'Luas_Ban': 'no label', 'Luas_Tan': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_sekolah1_31.set('fieldLabels', {'Id': 'no label', 'Nm_Sekolah': 'no label', 'Nm_Kepsek': 'no label', 'No_Contact': 'no label', 'Luas_Ban': 'no label', 'Luas_Tan': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_rumahsaya1_32.set('fieldLabels', {'Id': 'no label', 'No_Rumah': 'no label', 'Status_Kep': 'no label', 'Jns_Bangun': 'no label', 'Jns_Lantai': 'no label', 'Nama_KK_Pe': 'no label', 'Pend_Terak': 'no label', 'Pekerjaan': 'no label', 'No_Telp': 'no label', 'No_KTP': 'no label', 'Jmlh_Laki2': 'no label', 'Jmlh_Perem': 'no label', 'Total_Huni': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_rumah1_33.set('fieldLabels', {'Id': 'no label', 'No_Rumah': 'no label', 'Status_Kpm': 'no label', 'Jns_Bangun': 'no label', 'Jns_Lantai': 'no label', 'Nm_KK_Peng': 'no label', 'Pend_Terak': 'no label', 'Pekerjaan': 'no label', 'No_Telp': 'no label', 'No_KTP': 'no label', 'Jmlh_Laki2': 'no label', 'Jmlh_Perem': 'no label', 'Total_Huni': 'no label', 'Luas_Ban': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_ruko1_34.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Usaha': 'no label', 'StatusUsah': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_restoran1_35.set('fieldLabels', {'Id': 'no label', 'Nama_Resto': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bangu': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PLN1_36.set('fieldLabels', {'Id': 'no label', 'Nm_PLN': 'no label', 'Kepala_PLN': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_panti1_37.set('fieldLabels', {'Id': 'no label', 'Nm_Panti': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_masjid1_38.set('fieldLabels', {'Id': 'no label', 'Nm_Mesjid': 'no label', 'Nm_ImamMas': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_lapangantenis1_39.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Kegiat': 'no label', 'Luas_Lahan': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_kuburan1_40.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Lahan': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_klinik1_41.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_kantorlurah1_42.set('fieldLabels', {'Id': 'no label', 'Nm_Kantor': 'no label', 'Nm_Kepala': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_kantor1_43.set('fieldLabels', {'Id': 'no label', 'Nm_Kantor': 'no label', 'Nm_KpKanto': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_kampus1_44.set('fieldLabels', {'Id': 'no label', 'Nm_Kampus': 'no label', 'Nm_Direktu': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_gudang1_45.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'Luas_Bang': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_gorbadminton1_46.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Jns_Kegiat': 'no label', 'Luas_Bang': 'no label', 'Luas_Lahan': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_cucimobil1_47.set('fieldLabels', {'Id': 'no label', 'Nm_Pemilik': 'no label', 'No_Contact': 'no label', 'Luas_Bang': 'no label', 'Luas_Tanah': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_cucimobil1_47.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});