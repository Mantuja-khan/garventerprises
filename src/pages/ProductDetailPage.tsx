import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Star, Shield, Truck, Award, Package, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuoteModal from '../components/common/QuoteModal';
import iw_381s from "../assets/katashi/iw-381s.png";
import iw_382s from "../assets/katashi/iw-382s.png";
import iw_383s from "../assets/katashi/iw-383s.png";
import iw_311p from "../assets/katashi/iw-3811p.png";
import sd_04sqc from "../assets/katashi/sd-04sqc.png";
import sd_05sqc from "../assets/katashi/sd-05sqc.png";
import sd_06pqc from "../assets/katashi/sd-06pqc.png";
import sd_09pqc from "../assets/katashi/sd-09pqc.png";
import dg_065s from "../assets/katashi/dg-065s.png";
import dg_066s_rh from "../assets/katashi/dg-066srh.png";
import dg_067_sl_rh from "../assets/katashi/dg067-sl-rh.png";
import dg_064s from "../assets/katashi/dg-064s.png";
import ag_25l from "../assets/katashi/ag-25l.png";
import ag_27r from "../assets/katashi/ag-27r.png";
import ag_42l from "../assets/katashi/ag-42l.png"
import ag_44r from "../assets/katashi/ag-44r.png"
import ah_75rh from "../assets/katashi/ah-75rh.png"
import ah_76rc from "../assets/katashi/ah-76rc.png"
import ch_78_3h from "../assets/katashi/ch-78-3h.png"
import dh_79 from "../assets/katashi/dh-79.png"
import hr_147hd from "../assets/katashi/hr_147hd.png"
import hr_3166hd from "../assets/katashi/hr_3166hd.png"
import hr_3164k from "../assets/katashi/hr_3164k.png"
import hr_3168y from "../assets/katashi/hr_3168y.png"
import ess145_dc from "../assets/katashi/ess145-dc.png"
import ess147_ac from "../assets/katashi/ess147-ac.png"
import ess146_ac from "../assets/katashi/ess146-ac.png"
import esp148_ac from "../assets/katashi/esp148-ac.png";
import bs_10s from "../assets/katashi/bs-10s.png";
import bs_20s from "../assets/katashi/bs-20s.png"
import ap_35p from "../assets/katashi/ap-35p.png"
import ap_36p from "../assets/katashi/ap-36p.png"
import rw_122c from "../assets/katashi/rw-122c.png"
import dm108pr from "../assets/katashi/dm108pr.png"
import dm102shl from "../assets/katashi/dm-102shl.png"
import dm104slr from "../assets/katashi/dm-104slr.png"
import dm106ar from "../assets/katashi/dm-106ar.png"
import rw_387 from "../assets/katashi/rw-387.png"
import rw_389hs from "../assets/katashi/rw-389hs.png"
import ag_100 from "../assets/ralliwolf/ag_100.png"
import angle_grinder_rf9 from "../assets/ralliwolf/angle_grinder.png"
import rdg25_6mm from "../assets/ralliwolf/rdg25_6mm.png"
import angle_grinder from "../assets/ralliwolf/angle_grinder.png"
import rdd110 from "../assets/ralliwolf/rdd110.png"
import rdd200 from "../assets/ralliwolf/rdd200.png"
import rw_cv35_3 from "../assets/ralliwolf/rw_cv35_3.png"
import electric_mixer from "../assets/ralliwolf/electric_mixer.png"
import rw4_sb from "../assets/ralliwolf/rw4_sb.png"
import rw110 from "../assets/ralliwolf/rw110.png"
import rw125_fb from "../assets/ralliwolf/rw125_fb.png"
import rw4 from "../assets/ralliwolf/rw4.png"
import rt6 from "../assets/ralliwolf/rt6.png"
import rw2_82 from "../assets/ralliwolf/rw2_82.png"
import rcs180 from "../assets/ralliwolf/rcs180.png"
import rs180 from "../assets/ralliwolf/rs180.png"
import yuva_38 from "../assets/ralliwolf/yuva_38.png"
import commando40s from "../assets/ralliwolf/commando40s.png"
import enova_40 from "../assets/ralliwolf/enova_40.png"
import mega_45 from "../assets/ralliwolf/mega_45.png"
import arc200 from "../assets/ralliwolf/arc200.png"
import ra20 from "../assets/ralliwolf/ra20.png"
import mig250 from "../assets/ralliwolf/mig250.png"
import cut60g from "../assets/ralliwolf/cut60g.png"
import iw_1281 from "../assets/ralliwolf/iw_1281.png";
import sd_5ma from "../assets/ralliwolf/sd_5ma.png";
import pg_1101h from "../assets/ralliwolf/pg_1101h.png";
import dg_56 from "../assets/ralliwolf/dg_56.png";
import rp30_3 from "../assets/ralliwolf/rp30_3.png";
import ed52d_ed63d from "../assets/ralliwolf/ed52d_ed63d.png";
import rs58 from "../assets/ralliwolf/rs58.png";
import rtp_16 from "../assets/ralliwolf/rtp_16.png";
import heavy_duty_drill from "../assets/ralliwolf/heavy_duty_drill.png";
import light_duty_drill from "../assets/ralliwolf/light_duty_drill.png";
import two_speed_drill from "../assets/ralliwolf/two_speed_drill.png";
import vertical_sander from "../assets/ralliwolf/vertical_sander.png";
import tapping_machine from "../assets/ralliwolf/tapping_machin.png";
import aloxide_resin_belts from "../assets/aipl_abro/aloxide_resin_belts.png"
import aloxide_resin_supreme_belts from "../assets/aipl_abro/aloxide_resin_supreme_belts.png"
import fle_xii_belts from "../assets/aipl_abro/fle_xii_belts.png"
import ziconium_belts from "../assets/aipl_abro/zirconium_belts.png"
import aluminium_belts from "../assets/aipl_abro/aluminium_belt.png"
import zirconia_belts from "../assets/aipl_abro/zirconia_belt.png"
import silicon_belts from "../assets/aipl_abro/silicon_belt.png"
import cc44j from "../assets/aipl_abro/cc44j.png"
import cc34x from "../assets/aipl_abro/cc34x.png"
import cc44n from "../assets/aipl_abro/cc44n.png"
import masking_tape from "../assets/aipl_abro/masking_tap.png"
import water_proof_paper from "../assets/aipl_abro/water_proof_paper.png"
import hole_grid_disc from "../assets/aipl_abro/hole_grid_disc.png"
import film_grid_disc from "../assets/aipl_abro/film_grid_disc.png"
import aipl_gold_flap_disc from "../assets/aipl_abro/aipl_gold_flap_disc.png"
import no_hole_psa_disc from "../assets/aipl_abro/no_hole_psa_disc.png"
import with_hole_psa_disc from "../assets/aipl_abro/with_hole_psa_disc.png"
import crc_contact_cleaner_plus from "../assets/crc/crc_contact_cleaner_plus.png"
import crc_contact_cleaner from "../assets/crc/crc_contact_cleaner.png"
import crc_dust_free from "../assets/crc/crc_dust_free.png"
import crc_gas_duster from "../assets/crc/crc_gas_duster.png"
import crc_nf_precision_cleaner from "../assets/crc/crc_nf_precision_cleaner.png"
import qd_contact_cleaner from "../assets/crc/qd_contact_cleaner.png"
import crc_graffiti_remover from "../assets/crc/crc_contact_cleaner_plus.png"
import crc_fast_dry_degreaser from "../assets/crc/crc_fast_dry_degreaser.png" 
import crc_industrial_degreaser from "../assets/crc/crc_industrial_degreaser.png"
import crc_label_off_super from "../assets/crc/crc_label_off_super.png"
import crc_inox_weld_kleen from "../assets/crc/crc_inox_weld_kleen.png"
import crc_eco_cold_cleaner from "../assets/crc/crc_eco_cold_cleaner.png"
import eco_complex_blue from "../assets/crc/eco_complex_blue.png"
import inox_clean from "../assets/crc/inox_kleen.png"
import eco_foam_cleaner from "../assets/crc/eco_foam_cleaner.png"
import crc_scale_remover from "../assets/crc/crc_scale_remover.png"
import main_hand from "../assets/crc/main_hand.png"
import hand_1 from "../assets/crc/hand_1.png"
import hand_2 from "../assets/crc/hand_2.png"
import hand_3 from "../assets/crc/hand_3.png"
import hand_wipes from "../assets/crc/hand_wipes.png"
import crc_wipes from "../assets/crc/crc_wipes.png"
import citrus_handcleaner from "../assets/crc/citrus_handcleaner.png"
import lubricant_image_1 from "../assets/crc/lubricant_image_1.png"
import lubricant_image_2 from "../assets/crc/lubricant_image_2.png"
import crc_supercut from "../assets/crc/crc_supercut.png"
import eco_supercut from "../assets/crc/eco_supercut.png"
import crc_super_tapping from "../assets/crc/super_tapping_fluid.png"
import crc_lub_21 from "../assets/crc/crc_lub_21.png"
import lubricant_image_3 from "../assets/crc/lubricant_image_3.png"
import lubricant_image_4 from "../assets/crc/lubricant_image_4.png"
import lo_1_image from "../assets/crc/lo_1_image.png"
import lo_2_image from "../assets/crc/lo_2_image.png"
import lo_3_image from "../assets/crc/lo_3_image.png"
import lo_main_image from "../assets/crc/lo_main_image.png"
import crc_chain_lube from "../assets/crc/crc_chain_lube.png"
import crc_dry_lube from "../assets/crc/crc_chain_lube.png"
import crc_multi_oil from "../assets/crc/crc_multi_oil.png"
import crc_silicon from "../assets/crc/crc_silicon.png"
import crc_silicon_grease from "../assets/crc/crc_silicon_grease.png"
import crc_high_speed_grease from "../assets/crc/crc_high_speed_grease.png"
import crc_multi_grease from "../assets/crc/crc_multi_grease.png"
import crc_food_grease from "../assets/crc/crc_food_grease.png"
import crc_high_temp_grease from "../assets/crc/crc_high_temp_grease.png"
import crc_ep_food_grease from "../assets/crc/crc_ep_food_grease.png"
import crc_copper_paste from "../assets/crc/crc_copper_paste.png"
import crc_metal_free_paste from "../assets/crc/crc_metal_free_paste.png"
import crc_assembly_paste from "../assets/crc/crc_assembly_paste.png"
import crc_alu_paste from "../assets/crc/crc_alu_paste.png"
import crc_3_36 from "../assets/crc/crc_3_36.png"
import crc_sp_350 from "../assets/crc/crc_sp_350.png"
import crc_sp_400 from "../assets/crc/crc_sp_400.png"
import crc_zinc from "../assets/crc/crc_zinc.png"
import ac_main from "../assets/crc/ac_main.png"
import ac_1 from "../assets/crc/ac_1.png"
import ac_2 from "../assets/crc/ac_2.png"
import ac_3 from "../assets/crc/ac_3.png"
// import ddf483 from "../assets/makita/ddf483.png"
import ddf484 from "../assets/makita/ddf484.png"
import ddf485 from "../assets/makita/ddf485.png"
import ddf486 from "../assets/makita/ddf486.png"
import ddf487 from "../assets/makita/ddf487.png"
// import dhp484 from "../assets/makita/dhp484.png"
// import dhp485 from "../assets/makita/dhp485.png"
// import dhp486 from "../assets/makita/dhp486.png"
// import dhp487 from "../assets/makita/dhp487.png"
// import ddf083 from "../assets/makita/ddf083.png"
import dsc191 from "../assets/makita/dsc191.png"
import dsc102 from "../assets/makita/dsc102.png"
import dsc553 from "../assets/makita/dsc553.png"
import dsc251 from "../assets/makita/dsc251.png"
// import dsc551 from "../assets/makita/dsc551.png"
import tl065d from "../assets/makita/tl065d.png"
import tw160d from "../assets/makita/tw160d.png"
import tw161d from "../assets/makita/tw161d.png"
import tw140d from "../assets/makita/tw140d.png"
import tw141d from "../assets/makita/tw141d.png"
import tw060d from "../assets/makita/tw060d.png"
import tl064d from "../assets/makita/tl064d.png"
import ga003g from "../assets/makita/ga003g.png"
import ga037g from "../assets/makita/ga037g.png"
import ga013g from "../assets/makita/ga013g.png"
import ga038g from "../assets/makita/ga038g.png"
import ga036g from "../assets/makita/ga036g.png"
import ga005g from "../assets/makita/ga005g.png"
import ga021g from "../assets/makita/ga021g.png"
import ga023g from "../assets/makita/ga023g.png"
import ga035g from "../assets/makita/ga035g.png"
import ga011g from "../assets/makita/ga011g.png"
import dfj210 from "../assets/makita/dfj210.png"
import dfj211 from "../assets/makita/dfj211.png"
import dfj214 from "../assets/makita/dfj214.png"
import dfj212 from "../assets/makita/dfj212.png"
import dfj213 from "../assets/makita/dfj213.png"
import dfv210 from "../assets/makita/dfv210.png"
import dcj205 from "../assets/makita/dcj205.png"
import dcj206 from "../assets/makita/dcj206.png"
import dcv202 from "../assets/makita/dcv202.png"
import dhs783 from "../assets/makita/dhs783.png"
import dhs780 from "../assets/makita/dhs780.png"
import dhs900 from "../assets/makita/dhs900.png"
import dls111 from "../assets/makita/dls111.png"
import dls714 from "../assets/makita/dls714.png"
import dsp600 from "../assets/makita/dsp600.png"
import djr360 from "../assets/makita/djr360.png"
import s_9031 from "../assets/makita/s_9031.png"
import s_9032 from "../assets/makita/s_9032.png"
import s_9741 from "../assets/makita/s_9741.png"
import  bo3710 from "../assets/makita/bo3710.png"
import  bo4556 from "../assets/makita/bo4556.png"
import  bo5031 from "../assets/makita/bo5031.png"
import  bo6030 from "../assets/makita/bo6030.png"
import duc353 from "../assets/makita/duc353.jpg"
import duc355 from "../assets/makita/duc355.jpg"
import duc356 from "../assets/makita/duc356.jpg"
import dlm530 from "../assets/makita/dlm530.jpg"
import dlm532 from "../assets/makita/dlm532.jpg"
import ddg460 from "../assets/makita/ddg460.jpg"
import dhw080 from "../assets/makita/dhw080.jpg"
//Katashi main pictures smart from here
import katashi_main from "../assets/katashi/katashi_main_image.jpeg"
import katashi_1 from "../assets/katashi/katashi_image_1.jpeg"
import katashi_2 from "../assets/katashi/katashi_image_2.jpeg"
import katashi_3 from "../assets/katashi/katashi_image_3.jpeg"
import sd_main from "../assets/katashi/sd_main.png"
import sd_1 from "../assets/katashi/sd_1.webp"
import sd_2 from "../assets/katashi/sd_2.webp"
import sd_3 from "../assets/katashi/sd_3.webp"
import dg_1 from "../assets/katashi/main_images/die_grinder_1.png"
import dg_2 from "../assets/katashi/main_images/die_grinder_2.png"
import dg_3 from "../assets/katashi/main_images/die_grinder_3.png"
import dg_main from "../assets/katashi/main_images/die_grinder_4.png"
import ag_main from "../assets/katashi/main_images/ag_main.png"
import ag_1 from "../assets/katashi/main_images/ag_1.png"
import ag_2 from "../assets/katashi/main_images/ag_2.png"
import ag_3 from "../assets/katashi/main_images/ag_3.png"
import ah_main from "../assets/katashi/main_images/ah_main.png"
import ah_1 from "../assets/katashi/main_images/ah_1.png"
import ah_2 from "../assets/katashi/main_images/ah_2.png"
import ah_3 from "../assets/katashi/main_images/ah_3.png"
import riv_main from "../assets/katashi/main_images/riv_main.png"
import riv_1 from "../assets/katashi/main_images/riv_1.png"
import riv_2 from "../assets/katashi/main_images/riv_2.png"
import riv_3 from "../assets/katashi/main_images/riv_3.png"
import esd_main from "../assets/katashi/main_images/esd_main.png"
import esd_1 from "../assets/katashi/main_images/esd_1.png"
import esd_2 from "../assets/katashi/main_images/esd_2.png"
import esd_3 from "../assets/katashi/main_images/esd_3.png"
import sp_main from "../assets/katashi/sp_main.jpeg"
import sp_1 from "../assets/katashi/sp_1.jpeg"
import sp_2 from "../assets/katashi/sp_2.jpeg"
import sp_3 from "../assets/katashi/main_images/sp_1.png"
import rat_main from "../assets/katashi/rat_main.jpeg"
import rat_1 from "../assets/katashi/rat_1.jpeg"
import rat_2 from "../assets/katashi/rat_2.jpeg"
import rat_3 from "../assets/katashi/rat_3.jpeg"
import drill_main from "../assets/katashi/drill_main.jpeg"
import drill_1 from "../assets/katashi/drill_1.jpeg"
import drill_2 from "../assets/katashi/drill_2.jpeg"
import drill_3 from "../assets/katashi/drill_3.jpeg"
import mt_1 from "../assets/kovax/mt_1.jpeg"
import mt_2 from "../assets/kovax/mt_2.jpeg"
import mt_3 from "../assets/kovax/mt_3.jpeg"
import mt_4 from "../assets/kovax/mt_4.jpeg"
import rf_drill from "../assets/ralliwolf/main_images/drill_main.png"
import rf_drill_1 from "../assets/ralliwolf/main_images/drill_1.png"
import rf_drill_2 from "../assets/ralliwolf/main_images/drill_2.jpg"
import rf_drill_3 from "../assets/ralliwolf/main_images/drill_3.png"
import rf_grinder from "../assets/ralliwolf/main_images/grinder_main.jpg"
import rf_grinder_1 from "../assets/ralliwolf/main_images/grinder_1.jpg"
import rf_grinder_2 from "../assets/ralliwolf/main_images/grinder_2.jpg"
import rf_grinder_3 from "../assets/ralliwolf/main_images/grinder_3.png"
import rf_mc_main from "../assets/ralliwolf/main_images/megnetic_main.jpg"
import rf_mc_1 from "../assets/ralliwolf/main_images/magnetic_1.jpg"
import rf_mc_2 from "../assets/ralliwolf/main_images/magnetic_2.jpg"
import rf_mc_3 from "../assets/ralliwolf/main_images/magnetic_3.png"
import rf_mcd from "../assets/ralliwolf/main_images/magnetic_3.png"
import rf_mcd_1 from "../assets/ralliwolf/mcd_1.jpg"
import rf_mcd_2 from "../assets/ralliwolf/mcd_2.jpg"
import rf_mcd_3 from "../assets/ralliwolf/mcd_3.jpg"
import we_main from "../assets/ralliwolf/main_images/welding_main.jpg"
import we_1 from "../assets/ralliwolf/main_images/welding_1.jpg"
import we_2 from "../assets/ralliwolf/main_images/welding_2.jpg"
import we_3 from "../assets/ralliwolf/main_images/welding_3.jpg"
import pt_main from "../assets/ralliwolf/main_images/pt_main.png"
import pt_1 from "../assets/ralliwolf/main_images/pt_1.png"
import pt_2 from "../assets/ralliwolf/main_images/pt_2.png"
import pt_3 from "../assets/ralliwolf/main_images/pt_3.jpg"
import it_main from "../assets/ralliwolf/main_images/industrial_main.png"
import it_1 from "../assets/ralliwolf/main_images/industrial_1.png"
import it_2 from "../assets/ralliwolf/main_images/industrial_2.jpg"
import it_3 from "../assets/ralliwolf/main_images/industrial_3.jpg"
//Makita main images statred from here
import main_cutter from "../assets/makita/main_image/main_cutter.jpg"
import main_grinder from "../assets/makita/main_image/main_grinder.jpg"
import main_jacket from "../assets/makita/main_image/main_jacket.jpg"
import main_sander from "../assets/makita/main_image/main_sander.jpg"
import main_saw from "../assets/makita/main_image/main_saw.jpg"
import main_wrench from "../assets/makita/main_image/main_wrench.jpg"
import wrench_2 from "../assets/makita/main_image/wrench_2.jpg"
import wrench_3 from "../assets/makita/main_image/wrench_2.jpg"

import main_drill from "../assets/makita/main_image/drill_main.jpg"
import makita_drill_1 from "../assets/makita/main_image/drill_1.jpg"
import makita_drill_2 from "../assets/makita/main_image/drill_2.jpg"
import makita_drill_3 from "../assets/makita/main_image/drill_2.jpg"
import grinder_1 from "../assets/makita/main_image/grinder_1.jpg"
import grinder_2 from "../assets/makita/main_image/grinder_2.jpg"
import grinder_3 from "../assets/makita/main_image/grinder_3.jpg"
import saw_1 from "../assets/makita/main_image/saw_1.jpg"
import saw_2 from "../assets/makita/main_image/saw_2.jpg"
import saw_3 from "../assets/makita/main_image/saw_3.jpg"
import jacket_1 from "../assets/makita/main_image/jacket_1.jpg"
import jacket_2 from "../assets/makita/main_image/jacket_2.jpg"
import jacket_3 from "../assets/makita/main_image/jacket_3.jpg"
import cutter_1 from "../assets/makita/main_image/cutter_1.jpg"
import cutter_2 from "../assets/makita/main_image/cutter_2.jpg"
import cutter_3 from "../assets/makita/main_image/cutter_3.jpg"
import sander_1 from "../assets/makita/main_image/sander_1.jpg"
import sander_2 from "../assets/makita/main_image/sander_2.jpg"
import sander_3 from "../assets/makita/main_image/sander_3.jpg"
import wrench_1 from "../assets/makita/main_image/wrench_2.jpg"
// kovax main products started from here 
import accessories_main from "../assets/kovax/main_image/accessories_main.png"
import accessories_1 from "../assets/kovax/main_image/accessories_1.png"
import accessories_2 from "../assets/kovax/main_image/accessories_2.png"
import filler_main from "../assets/kovax/main_image/filler_main.png"
import filler_1 from "../assets/kovax/main_image/filler_1.png"
import finishing_main from "../assets/kovax/main_image/finishing_main.png"
import water_proof_main from "../assets/kovax/main_image/water_proof_main.png"
import water_proof_1 from "../assets/kovax/main_image/water_proof_1.png"
import water_proof_2 from "../assets/kovax/main_image/water_proof_2.png"
import water_proof_3 from "../assets/kovax/main_image/water_proof_3.png"
import tripo from "../assets/kovax/main_image/tripro.png"
import masking_main from "../assets/kovax/main_image/masking_main.jpg"
import masking_1 from "../assets/kovax/main_image/masking_1.jpg"
import masking_2 from "../assets/kovax/main_image/masking_2.jpg"
import masking_3 from "../assets/kovax/main_image/masking_3.jpg"
import maxcut from "../assets/kovax/main_image/maxcut.png"
import maxfilm from "../assets/kovax/main_image/maxfilm.png"
import tripro from "../assets/kovax/main_image/tripro.png"
import buflex from "../assets/kovax/main_image/buflex.png"
import cutter from "../assets/milestone/cutter.png"
import miles_cutter_1 from "../assets/milestone/cutter_1.png"
import miles_cutter_2 from "../assets/milestone/cutter_2.png"
import m21200 from "../assets/milestone/m21200.png" 
import m23250 from "../assets/milestone/m23250.png" 
import m23270 from "../assets/milestone/m23270.png" 
import m23111 from "../assets/milestone/m23111.png" 
import ms10f13 from "../assets/milestone/ms10f13.png"
import ms80161 from "../assets/milestone/ms80161.png" 
import ms7116 from "../assets/milestone/ms7116.png" 
import ms10j13 from "../assets/milestone/ms10j13.png" 
import ms1832 from "../assets/milestone/ms1832.png" 
// import ms1850 from "../assets/milestone/ms1850.png"
import ms16wc50 from "../assets/milestone/ms16wc50.png" 
import ts2380a from "../assets/milestone/ts2380a.png"
import ts2313a from "../assets/milestone/ts2313a.png"
import mb1664 from "../assets/milestone/mb1850.png"
import mp622 from "../assets/milestone/mp622.png"
import ms16w50 from "../assets/milestone/ms16w50.png"
import mcs3518pro from "../assets/milestone/mcs3518pro.png"
import mcs3522pro from "../assets/milestone/mcs3522pro.png"
import mcn57 from "../assets/milestone/mcn57.png"
import mb1850 from "../assets/milestone/mb1850.png"
import fasteners from "../assets/milestone/fasteners.png"
import stichwire from "../assets/milestone/stichwire.png"
import minipa901 from "../assets/milestone/minipa901.png"
import pn1801 from "../assets/milestone/pn1801.png"
import pn902 from "../assets/milestone/pn902.png"
import fn1802 from "../assets/milestone/fn1802.png"




const ProductDetailPage: React.FC = () => {
  const { category, product } = useParams();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
  
  // This would normally come from a data source
  const productData = {
    polybags: {
      name: 'Premium Polybags',
      brand: 'PlasticPro',
      description: 'High-quality polybags manufactured with food-grade materials, perfect for retail and industrial applications. Available in various sizes and customizable options.',
      image: 'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'Food-grade material certification',
        'Available in multiple sizes and thickness',
        'Custom printing options available',
        'Bulk order discounts',
        'Fast delivery across India',
        'Eco-friendly options available',
        'Quality tested for durability'
      ],
      specifications: {
        'Material': 'LDPE/HDPE',
        'Thickness': '20-200 microns',
        'Sizes': 'Custom sizes available',
        'Colors': 'Transparent, colored options',
        'Certification': 'Food grade, ISO certified',
        'Minimum Order': '1000 pieces',
        'Lead Time': '3-7 business days'
      },
      applications: [
        'Retail packaging',
        'Food storage',
        'Industrial components',
        'E-commerce shipping',
        'Medical supplies',
        'Agricultural products'
      ]
    },
//     'bubble-wraps': {
//       name: 'Air Bubble Wraps',
//       brand: 'PlasticPro',
//       description: 'Superior protection bubble wrap for fragile items with excellent cushioning properties. Perfect for shipping and storage applications.',
//       image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Superior cushioning protection',
//         'Anti-static options available',
//         'Perforated sheets for easy use',
//         'Custom printing available',
//         'Recyclable material',
//         'Various bubble sizes',
//         'Lightweight yet strong'
//       ],
//       specifications: {
//         'Material': 'LDPE',
//         'Bubble Size': '6mm, 10mm, 20mm',
//         'Roll Width': '300mm to 1500mm',
//         'Roll Length': '50m to 100m',
//         'Thickness': '60-120 microns',
//         'Colors': 'Clear, Pink (Anti-static)',
//         'Minimum Order': '500 sq meters'
//       },
//       applications: [
//         'Electronics packaging',
//         'Glassware protection',
//         'Furniture wrapping',
//         'Automotive parts',
//         'Artwork protection',
//         'Moving and storage'
//       ]
//     },
//     'pneumatic-dcc-services': {
//       name: 'Pneumatic DCC series',
//       brand: 'Uflow',
//       description: 'Professional pneumatic system design, consultation, and commissioning services for industrial automation applications.',
//       image: 'https://media.istockphoto.com/id/1252394195/photo/pneumatic-piston-cylinder.jpg?s=612x612&w=0&k=20&c=oz-NjZHmteQH81xwSbMPARklqb0KGvN1Y2jDjTRDr_s=',
//       gallery: [
//         'https://media.istockphoto.com/id/1252394194/photo/pneumatic-piston-cylinder.jpg?s=612x612&w=0&k=20&c=6xNNLUEWBrwm12qPGLL8ppAn8f4VfvEGfYGaGAk9ffM=',
//         'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Cartridge Type Design For Long Life',
//         'Compact Design',
//         'Standard NAMUR Mounting',
//         '1 Million Cycle Tested',
//         ' Low Power Consumption',
//         'Manual Override',
//         'Wide Range Of Coil Voltage'
//       ],
//       specifications: {
//         'Service Type': 'Solenoid Operated, Lever Operated, Pilot Air Operated,Push Pull (3X2-NC / NO, 5X2, 5X3)',
//         'Design': 'Spool Type & Cartridge Type (DCC Series)',
//         'Media ': 'Compressed Air (Filtered & Lubricated)',
//         'Working Pressure Range': '2 - 10 Bar for Solenoid Valve ,0 - 10 Bar for Manual Valve & Air Pilot Valve',
//         'Ambient / Media': '5°C - 60°C',
//         'Materials of Construction:': 'Aluminium, Nitrile, Brass, Polymer',
//       },
//       applications: [
//         'Industrial automation',
//         'Manufacturing lines',
//         'Packaging machinery',
//         'Assembly systems',
//         'Material handling',
//         'Quality control systems'
//       ]
//     },
//     'air-cylinder-mounting-bracket': {
//       name: 'Air Cylinder Mounting Bracket',
//       brand: 'Uflow',
//       description: 'Precision-engineered mounting brackets for secure air cylinder installation and optimal positioning in pneumatic systems.',
//       image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Multiple mounting configurations available',
//         'Corrosion-resistant coating',
//         'Easy installation and adjustment',
//         'Compatible with standard cylinders',
//         'Robust steel construction',
//         'Precision machined surfaces',
//         'Various size options'
//       ],
//       specifications: {
//         'Material': 'Carbon Steel with coating',
//         'Mounting Types': 'Front, Rear, Side, Pivot',
//         'Cylinder Compatibility': '16mm to 100mm bore',
//         'Load Capacity': 'Up to 500kg',
//         'Finish': 'Zinc plated',
//         'Temperature Range': '-20°C to +80°C',
//         'Minimum Order': '10 pieces'
//       },
//       applications: [
//         'Pneumatic cylinders',
//         'Linear actuators',
//         'Automation equipment',
//         'Assembly fixtures',
//         'Material handling',
//         'Industrial machinery'
//       ]
//     },
//     'compact-cylinder': {
//       name: 'Compact Cylinder',
//       brand: 'uflow',
//       description: 'Sturdy corrugated boxes for shipping and storage. Eco-friendly and recyclable with excellent strength-to-weight ratio.',
//       image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Small Size and Lightweight',
//         'High Force Output.',
//         'Low Friction Operation.',
//         ' Short Stroke Length.',
//       ],
//       specifications: {
//         'Cylinder bore Ø (mm)': '12, 16, 20, 25, 32, 40, 50, 63, 80, 100',
//         'Standard strokes (mm)': '5,10,15,20,25,30,40,5,10,15,20,25,30,40,50,60 ,10, 20, 30, 40, 50, 60, 70, 80',
//         'Media': 'Compressed air - Filtered - Lubricated',
//         'Working pressure': '0.5 to 10 bar',
//         'Ambient temperature': '-10 to 60°C',
//         'Medium temperature': '+5 to +50°C',
//       },
//       applications: [
//         'Pick-and-place Systems.',
//         ' Packaging Machines',
//         ' Clamping Devices.',
//         'SPMS',
       
//       ]
//     },
//     'air-filter': {
//       name: 'Air Filter',
//       brand: 'uflow',
//       description: 'Sustainable paper bags for retail and shopping. Biodegradable and brand-friendly with custom printing options.',
//       image: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4226922/pexels-photo-4226922.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Conforms to ISO 5782 -1',
//         'Suitable for modular mounting',
//         'Press type Manual drain for easy operation',
//         'Bronze filtering element',
//         'Separator and shield for efficient moisture separation',
        
//       ],
//       specifications: {
//         'Model No.': 'PD-F1,PD-F7, PD-F2, PD-F3, PD-F4',
//         'Media': 'compressed air',
//         'Port Size': 'G¼, G³⁄₈, G½, G¾, G1',
//         'Flow Rate LPM': '800, 2250, 3500, 5000, 6500',
//         'Maximum Supply Pressure': '10 Bar',
//         'Ambient Temprature': 'Manual Drain:-10°C to +50°C, Semi Auto Drain: +5°C to +50°C',
//         'Media Temperature': '+5°C to +50°C',
//         'Filtration': '1, 5, 25, 40 (Standard), 50, 100',
//         'Bowl Capacity (ml)': '9, 32, 44, 165, 165',

//       },
//       applications: [
//         'Retail shopping bags',
//         'Gift packaging',
//         'Food service bags',
//         'Promotional bags',
//         'Eco-friendly packaging'
//       ]
//     },
//     'air-lubricator': {
//       name: 'Air Lubricator',
//       brand: 'uflow',
//       description: 'Heavy-duty bulk bags for industrial applications. Safe for handling large quantities with high load capacity.',
//       image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Conforms to ISO 6301-1',
//         ' Suitable for modular mounting',
//         'Fog/Mist type',
//         'Fine adjustment of lubrication',
//         'Lubrication proportional to flow',
//       ],
//       specifications: {
//         'Model No.': 'PD-L7 , PD-L2 , PD-L3 , PD-40',
//         'Media': 'Compressed air - Filtered',
//         'Port Size': 'G¼, G½, G¾, G³⁄₈, G1' ,
//         'Flow Rate LPM': '1350 , 3000 , 5650 , 7200 , 9000',
//         'Maximum Supply Pressure': '10 Bar',
//         'Ambient Temprature': '-10°C to +50°C',
//         'Medium Temperature': '+5°C to +50°C',
//         'Min Operating Flow (lts/min)': '12, 40, 45, 50, 50',
//         'Bowl Capacity (ml):(at maximum oil level)': 'Polycarbonate',
//         'Installation': 'Vertical (as in the picture)'
//       },
//       applications: [
//         'Agricultural products',
//         'Construction materials',
//         'Chemical industry',
//         'Food grains storage',
//         'Recycling and waste management'
//       ]
//     },
//     'air-regulator': {
//       name: 'Air Regulator-PD Series',
//       brand: 'Uflow',
//       description: 'Heavy-duty bulk bags for industrial applications. Safe for handling large quantities with high load capacity.',
//       image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Confonns to ISO 6953 - 1',
//         'Suitable for panel and modular mountings',
//         'Nonraising "Push To Lock" Adjusting Knob For Locking At Any Set Pressure',
//         'Diaphragm operated, relieving type',
//         'Pressure Compensated By Balanced Poppet',
//         'Moisture resistant liners available',
//         'Good Flow And Regulating Characteristics'
//       ],
//       specifications: {
//         'Model No': ' PD-R2 , PD-R3 , PD-R4 , PD-R7 , PD-R1',
//         'Media': 'Compressed air - Filtered',
//         'Port Size': 'G¼, G½, G¾, G³⁄₈, G1',
//         'Pressure Guage Port Size': 'G¹⁄₈, G¹⁄₈, G¹⁄₈, G¹⁄₈, G¼',
//         'Maximum Supply Pressure': '15 Bar',
//         'Regulating Pressure Range': '0.2- 2, 0.2 -4, 0.5-7, 0.5-12',
//         'Ambient Temprature': '-10°C to +60°C',
//         'Medium Temperature': '+5°C to +50°C',
//         'Installation': 'Any Position',
//       },
//       applications: [
//         'Agricultural products',
//         'Construction materials',
//         'Chemical industry',
//         'Food grains storage',
//         'Recycling and waste management'
//       ]
//     },
//     'high-pressure-regulator': {
//       name: 'Hgh Pressure Regulator',
//       brand: 'uflow',
//       description: 'Heavy-duty bulk bags for industrial applications. Safe for handling large quantities with high load capacity.',
//       image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'A filter has been added to the inlet port and an inlet pressure gauge has been installed in accordance with standard 6901.',
//         ' Metal diaphragm maintain consistent pressure regulation, offering precise control over system pressures.',
//         'Very compact design',
//         'Bottom mounting available',
//         'Adjustable relief pressure',
//       ],
//       specifications: {
//         'Type': 'Diaphragm Operated',
//         'Body': 'Brass,SS316L',
//         'Port Size': '1/4- NPT Female',
//         'Media': 'Nitrogen, O , Argon, etc..',
//         'Circumstance Temp': '-40°C to +110°C',
//         'Inlet Pressure': '400 Bar',
//         'Regulated Pressure': '0 to 25 Bar',
//         'Nominal Flow at 20 Bar Outlet Pressure': '40 m³/hr',
//         'Safety Valve Cracking Pressure': '30 Bar (Adjustable)',
//       },
//       applications: [
//         'Agricultural products',
//         'Construction materials',
//         'Chemical industry',
//         'Food grains storage',
//         'Recycling and waste management'
//       ]
//     },
//     'one-touch-fittings': {
//       name: 'One Touch Fitting',
//       brand: 'uflow',
//       description: 'Heavy-duty bulk bags for industrial applications. Safe for handling large quantities with high load capacity.',
//       image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'Compact & Captivating Design',
//         'All Threaded nipples has plastic portion that is capable of rotating 360°',
//         'Full bore piping enables smooth flow of fluids',
//         'New Design SS collet',
//         'Air tight sealing of tubes',
//         'Compatible with both Nylon & PU pipes',
//         'CMale Taper threads with PTFE coating'
//       ],
//       specifications: {
//         'Media': 'Air',
//         'Max. operating pressure': '10 bar',
//         'Ambient connection': '-10°C to +60°C',
//         'Media Temprature': '+5°C to +50°C',
//         'Application Tube Size (OD)': 'Ø4, Ø6, Ø8, Ø10, Ø12, Ø14, Ø16',
//         'Application Tube material': 'Nylon, Polyurethane'
//       },
//       applications: [
//         ' Pneumatic cylinders (all types)',
//         'Directional control valves(DCV), solenoid valves(SOV) and other valves',
//         ' Pneumatic control & circuit panels',
//         'Food grains storage',
//         'Air preparation units like filter, regulator and lubricators(FRL)'
//       ]
//     },
// 'Poppet Valve': {
//       name: 'Plastic Tubings',
//       brand: 'uflow',
//       description: 'Heavy-duty bulk bags for industrial applications. Safe for handling large quantities with high load capacity.',
//       image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'High load capacity up to 2000 kg',
//         'UV resistant options available',
//         'Food grade material certification',
//         'Custom printing and branding',
//         'Multiple lifting options (loops, sleeves)',
//         'Moisture resistant liners available',
//         'Cost-effective bulk packaging solution'
//       ],
//       specifications: {
//         'Type ': '5/2',
//         'Design': 'Internal Pilot Operated Poppet Valve',
//         'Port Size': 'In / Out / Exhaust - ¼" BSP (Available in NPT)',
//         'Media': 'Compressed Air (Filtered & Lubricated)',
//         'Flow Factor': '18 kv (LPM of Water @ 1 bar ΔP)',
//         'Ambient/Media Temprature': '5°C - 60°C',
//         'Orifice': '7mm',
//         'Materials of Construction': 'Aluminium, Nitrile, Polymer, Brass'
//       },
//       applications: [
//         'Agricultural products',
//         'Construction materials',
//         'Chemical industry',
//         'Food grains storage',
//         'Recycling and waste management'
//       ]
//     },
//     'shuttle-or-valve': {
//       name: 'Shuttle OR Valve',
//       brand: 'uflow',
//       description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
//       image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//       gallery: [
//         'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
//         'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
//       ],
//       features: [
//         'OR valve delivers air at the outlet',
//         'always supplied by higher pressure',
//         'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
//       ],
//       specifications: {
//         'Model No': 'M5 , 1/8 ,1/4',
//         'Medium': 'Compressed air - Dry, Filtered, Lubricated',
//         'Operating pressure range': '1.5 TO 10 bar',
//         'Ambient temperature': '-10 to +60°C',
//         'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
//         'Minimum Order': '100 pieces'
//       },
//       applications: [
//         'Agricultural products',
//         'Construction materials',
//         'Chemical industry',
//         'Food grains storage',
//         'Recycling and waste management'
//       ]
//     },
    // 'Paper Roll': {
    //   name: 'Paper Roll',
    //   brand: 'kovax abrasive',
    //   description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
    //   image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   gallery: [
    //     'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
    //   ],
    //   features: [
    //     'OR valve delivers air at the outlet',
    //     'always supplied by higher pressure',
    //     'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
    //   ],
    //   specifications: {
    //     'Model No': 'M5 , 1/8 ,1/4',
    //     'Medium': 'Compressed air - Dry, Filtered, Lubricated',
    //     'Operating pressure range': '1.5 TO 10 bar',
    //     'Ambient temperature': '-10 to +60°C',
    //     'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
    //     'Minimum Order': '100 pieces'
    //   },
    //   applications: [
    //     'Agricultural products',
    //     'Construction materials',
    //     'Chemical industry',
    //     'Food grains storage',
    //     'Recycling and waste management'
    //   ]
    // },
    'Body Filter': {
      name: 'Body Filter',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'Polyster Putty': {
      name: 'Polyster Putty',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'Dry guide coat': {
      name: 'Dry Guide Coat',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'Dry Sheet': {
      name: 'Dry Sheet',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'Plastic Masking Film': {
      name: 'Platic Masking Film',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'Fine Line Tape': {
      name: 'Fine Line Tape',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'Dry Sanding Abrasives Range': {
      name: 'Dry Sanding Abrasives Range',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'dual-action-sander': {
      name: 'Dual Action Sander',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    'Tack Cloth': {
      name: 'Tack Cloth',
      brand: 'kovax abrasive',
      description: 'An OR valve, or shuttle valve, ensures that a function can be activated from one of two different inputs. It provides an outputs',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'OR valve delivers air at the outlet',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    // RALLIWOLF PRODUCTS START
    'compact-drill': {
      name: 'DRILL',
      brand: 'ralliWolf',
      description: 'A Drill is a versatile power tool designed for drilling holes and driving fasteners across wood, metal, plastic, masonry, and other materials. Depending on the type (rotary, hammer, impact, or cordless).',
      image: rf_drill,
      gallery: [
        rf_drill_1,
        rf_drill_2,
        rf_drill_3
      ],
      features: [
         "Electronic Cell protection for longer life",
         "Fast charging adaptor with more safety",
         "Soft grip for easy handling"
      ],
      specifications: {
  "Max Voltage (V)": "12",
  "Battery Capacity (mAh)": "1500",
  "Drill Capacity (Steel/Wood)": "10 / 15 mm",
  "No Load Speed (RPM)": "0-400 / 0-1450",
  "Max Torque (NM)": "25",
  "Weight (KG)": "0.8"
},
      relatedProducts: [
    {
      id: 'rdd110',
      name: 'DIAMOND CORE DRILL RDD110',
      image: rdd110,
     points: [
  "Model -- RDD110",
  "Voltage -- 230V",
  "Power Input  -  2080W",
  "No load RPM	 --  0-2100 rpm",
  "Drill Range	-- ∅12-110mm"
]
    },
    {
      id: 'rdd200',
      name: 'DIAMOND CORE DRILL RDD200',
      image: rdd200,
      points: [
        "Model -- RDD200",
  "Voltage -- 230V",
  "Input Power -- 3900W",
  "Largest Drill -- 205mm",
  "Frequency -- 50-60Hz",
  "No Load Speed -- 580 rpm."
      ]
    },
    {
      id: 'rw-cv35-3',
      name: ' CONCRETE VIBERATOR RW-CV35-3',
      image: rw_cv35_3,
      points: [
  "Voltage -- 230V 50HZ",
  "Rated Power -- 1100W",
  "No load speed -- 4400r/min",
  "Vibration Rod dia. -- 35mm",
  "Vibration Rod length -- 3M",
  "Full Load Current -- 5Amps"
      ]
      
    },
   
  ]
      
    },
    'grinder': {
      name: 'GRINDER',
      brand: 'ralliWolf',
      description: 'A versatile compact grinder for various grinding applications.',
      image: rf_grinder,
      gallery: [
        rf_grinder_1,
        rf_grinder_2,
        rf_grinder_3
      ],
      features: [
        "Electronic Overload Protection",
        "Soft Start",
        "Slide type Deadman Switch",
        "Variable Speed"

      ],
      specifications: {
  "Model": "60145",
  "Voltage": "230V 50Hz",
  "Rated Power (W)": "1400",
  "No Load Speed (RPM)": "3000-11000",
  "Max Disc Diameter (MM)": "125 (5”)",
  "Inner Diameter of Disc (MM)": "22.2",
  "Spindle Thread": "M14",
  "Full Load Current (Amps)": "7.6",
  "Weight (KG)": "2.2"
}
,
      relatedProducts: [
    {
      id: 'rdg25-6mm',
      name: 'RDG25 6mm',
      image: rdg25_6mm,
      points: [
       "Model -- RDG 25",
  "Capacity -- 6mm (collet)",
  "Watts Input (full Load) -- 420 Watts",
  "No Load Speed -- 25000 r.p.m.",
  "Approx Net Weight -- 1.9 kg"
      ]
    },
    {
      id: 'angle-grinder-rg8-100-100mm',
      name: 'ANGLE GRINDER RG8-100 100mm',
      image: angle_grinder,
      points: [
        "Model -- RG8-100",
  "Capacity -- ø100 × ø16 × 6mm",
  "Watts Input (full Load) -- 850 Watts",
  "No Load Speed -- 10500 / min",
  "Approx Net Weight -- 1.7 Kg."
      ]
    },
    {
      id: 'angle-grinder-rf9-100-100mm',
      name: 'ANGLE GRINDER RF9-100 100mm',
      image: angle_grinder_rf9,
      points: [
        "Model -- RF9-100",
        "Grinding Wheel Size -- ø100 X ø16 X 5.5mm",
        "Rated Voltage -- 235V AC",
        "Input Power -- 900 W",
        "No Load Speed -- 11000 r.p.m.",
        "Full load Current -- 3.6A",
        "Approx Weight -- 1.7 kg"
      ]
      
    },
    {
      id: 'ag100-100mm',
      name: 'AG100 100mm',
      image: ag_100,
      points: [
        "Model -- AG100",
  "Capacity -- Ø100xØ16xØ6mm",
  "Watts Input (full Load) -- 1020 Watts",
  "No Load Speed -- 10500 r.p.m",
  "Approx Net Weight -- 2 Kg"
      ]
    }
  ]
    },
    'marble-cutter': {
      name: 'MARBLE CUTTER',
      brand: 'ralliWolf',
      description: 'A powerful marble cutter for precise cutting applications.',
      image: rf_mc_main,
      gallery: [
        rf_mc_1,
        rf_mc_2,
        rf_mc_3
      ],
      features: [
        'Cutting the marble in easy way',
        'amooth cutting',
        'sharp blades',
        
      ],
      specifications: {
  "Insulation": "Double Insulated",
  "Rated Power (W)": "1200",
  "Rated Voltage (V)": "230",
  "Max Cutting Depth (MM)": "34",
  "Max Blade Diameter (MM)": "110",
  "Full Load Current (Amps)": "5.2",
  "No Load Speed (RPM)": "11000"
},
         relatedProducts: [
    {
      id: 'rw4-sb',
      name: 'RW4-SB 110mm',
      image: rw4_sb,
      points: [
        "Insulation -- Double Insulated",
        "Rated Voltage -- 235V AC",
        "Watts input (Full load) -- 1200 Watts",
        "No Load Speed -- 11000 r.p.m",
        "Approx Waight -- 3 kg"
      ]
    },
    {
      id: 'rw4',
      name: 'RW4 110mm',
      image: rw4,
     points: [
         "Max. Cutting Capacity -- 34mm",
         "Rated Voltage -- 235V AC",
         "Watts input (full load) -- 1050 Watts",
         "No Load Speed -- 13000 r.p.m.",
         "Full Load Current -- 4.5A",
         "Approx Weight -- 3.2 kg."
]
    }, 
    {
      id: 'rw125-fb',
      name: 'RW125-FB 125mm',
      image: rw125_fb,
      points: [
  "Blade Dia -- 125mm",
  "Rated Voltage -- 235V AC",
  "Input Power -- 1300W",
  "No Load Speed -- 13000 R.P.M.",
  "Full Load Current -- 5.5A"
]
    }
  ]
    },
    'wood-working': {
      name: 'WOOD WORKING',
      brand: 'ralliWolf',
      description: 'Woodworking tools are a wide range of hand tools and power tools designed for cutting, shaping, joining, finishing, and assembling wood. From traditional chisels and saws to modern power tools like routers, drills, and sanders, these tools enable carpenters, furniture makers',
      image: rs180,
      gallery: [
      ],
      features: [
        "Ergonomic design comfortable grip handle for two handled operation",
        "Overheat protection to protect the motor",
        "Blade guard for user protection",

      ],
      specifications: {
  "Rate Voltage": "235v AC",
  "Watts Input (full load)": "1400 Watts",
  "Rated Power (W)": "1400",
  "No Load Speed (RPM)": "5600 rpm",
  "Full load Current": "5.9A",
}
,
      relatedProducts: [
    {
      id: 'rs180',
      name: 'CIRCULAR SAW RS180',
      image: rs180,
      points: [
  "Rated Voltage -- 235v AC",
  "Watts Input (full load) -- 1400 Watts",
  "No load speed -- 5600 r.p.m",
  "Full load Current -- 5.9A"
]
    },
    {
      id: 'rcs180',
      name: 'CIRCULAR SAW RCS180',
      image: rcs180,
      points: [
  "Blade Diameter -- 185 mm",
  "Rated Voltage -- 235v AC",
  "Watts Input (full load) -- 1400 Watts",
  "No load speed -- 5600 r.p.m",
  "Full load Current -- 5.9A"
]
    },
    {
      id: 'rw2-82',
      name: 'PLANER RW2-82',
      image: rw2_82,
     points: [
  "Model -- RP500",
  "Capacity -- 82 mm X 2 mm",
  "Watts input (full load) -- 500 W",
  "No Load Speed -- 17000 r.p.m.",
  "Approx Weight -- 2.6 kg."
]
      
    },
    {
      id: 'rt6',
      name: 'TRIMMER RT6 ',
      image: rt6,
     points: [
  "Voltage -- 230V 50HZ",
  "Rated Power -- 600W",
  "No load speed -- 30000 RPM",
  "Mandrel connection -- 6 / 6.35mm",
  "Full Load Current -- 2.6 Amps.",
  "Approx waight -- 1.8kg."
]
    }
  ]
    },
    'magnetic-core-drill': {
      name: 'MAGNETIC CORE DRILL',
      brand: 'ralliWolf',
      description: 'MEGA – 45 is a Morse Taper 2 magnetic core drilling machine, for the professionals who do not want to compromise on quality & performance at an attractive price. With the powerful motor MEGA – 45 performs 45 mm diameter core drilling with 50 mm cutting depth',
      image: rf_mcd,
      gallery: [
        rf_mcd_1,
        rf_mcd_2,
        rf_mcd_3
      ],
      features: [
        "Portable & Compact – Easy to carry and use on-site.",
        "Variable Speed Control – Adapts to different materials and cutter sizes.",
        "Powerful Motor – Ensures consistent drilling in heavy-duty applications.",

      ],
      specifications: {
  "Model": "MEGA – 45",
  "Rated Voltage (V)": "220 / 235 AC",
  "Frequency (Hz)": "50~60",
  "Input Power (W)": "1380",
  "Max Core Drilling Capacity": "Dia 45 x 50 deep",
  "Max Drill with Twist Drill (MM)": "19",
  "Max Tapping Dia (MM)": "3 – 12",
  "Speed (Variable RPM)": "100 – 470",
  "Magnetic Adhesion (N)": "16500",
  "Magnet Base Size (MM)": "202 x 102 x 45",
  "Stroke (MM)": "210",
  "Weight (KG)": "19"
}
,
// yaha tak ho gya hai (isme related product baki h)
      relatedProducts: [
    {
      id: 'yuva-38',
      name: 'MAGNETIC CORE DRILL YUVA 38',
      image: yuva_38,
      points: [
        "1300W, 700r/min, 12000N, 8Amps.",
        "38mm dia x 50mm depth",
        "13mm, Grounding (to earth), 13 kg"
      ]
    },
    {
      id: 'commando_40s',
      name: 'MAGNETIC CORE DRILL COMMANDO 40s',
      image: commando40s,
     points: [
  "Capacity -- 40 mm dia × 50 mm Depth",
  "Watts Input (Full load) -- 1100 W",
  "No load RPM -- 270 to 610 RPM",
  "Variable / Reversible -- Variable",
  "Speed Selection -- 6 Speed",
  "Magnetic Adhesion -- 8000 N",
  "Max Core Drill Capacity -- 40 X 50 MM",
  "Adaptor Size -- Self 19.05 MM",
  "Twist Drill Capacity -- 13MM",
  "Stroke -- 85MM"
]
    },
    {
      id: 'mega-45',
      name: 'MEGA -45',
      image: mega_45,
     points: [
  "Model -- MEGA – 45",
  "Rated Voltage -- 220V / 235V AC",
  "Frequency Hz -- 50~60",
  "Input Power -- 1380W",
  "Max Core Drilling Capacity -- Dia 45 x 50 deep",
  "Max Drill with Twist Drill -- 19mm",
  "Max Tapping Dia -- 3mm to 12mm Max",
  "Speed - Variable -- 100 – 470 rpm",
  "Magnetic Adhesion -- 16500N"
]
      
    },
    {
      id: 'enova-40',
      name: 'MAGNETIC CORE DRILL ENOVA 40',
      image: enova_40,
      points: [
  "Model -- Enova 40",
  "Capacity(Core Cutting) -- 40 mm dia × 50 mm Depth",
  "No Load Speed -- 400 r.p.m.",
  "Magnetic Adhesion -- 1100 KGF",
  "Magnet Size -- 165mm × 80mm",
  "Approx Net Weight -- 13.2 kg.",
  "Rated Power -- 1200W",
  "Rated Voltage -- 235V AC"
]
    }
  ]
      
    },
    'welding-equipment': {
      name: 'WELDING EQUIPMENT',
      brand: 'ralliWolf',
      description: 'Welding equipment includes machines and tools used to join metals (and sometimes thermoplastics) by applying heat, pressure, or both. The most common types are Arc Welders, MIG (Metal Inert Gas), TIG (Tungsten Inert Gas), and Spot Welders.',
      image: we_main,
      gallery: [
        we_1,
        we_2,
        we_3
      ],
      features: [
        'The machines can be used with long extended cables at a considerable distance from the power source',
        'Digital display of the parameters',
        'TIG/ Argon welding with scratch / lift arc start with optional TIG accessories',
      ],
      specifications: {
  "Input Voltage (V)": "AC 415 ± 15%",
  "Frequency (Hz)": "50 / 60",
  "Rated Input Current (A)": "35",
  "Power (KVA)": "25.3",
  "No Load Voltage (V)": "80",
  "Output Current Range (A)": "40 – 500",
  "Rated Output Voltage (V)": "40",
  "Duty Cycle (%)": "60",
  "No Load Loss (W)": "80",
  "Efficiency (%)": "85",
  "Power Factor": "0.93",
  "Insulation Grade": "F",
  "Housing Protection Grade": "IP 21",
  "Weight (KG)": "40",
  "Inverter Technology": "IGBT"
},
       relatedProducts: [
    {
      id: 'arc-welder-arc200',
      name: 'ARC WELDER - ARC200 (ECO200N) (IGBT Series)',
      image: arc200,
     points: [
  "Input Voltage (V) -- AC 220 ± 15%",
  "Frequency (HZ) -- 50 / 60",
  "Rated Input Current (A) -- 47",
  "Power (KVA) -- 10.1",
  "No-load Voltage (V) -- 70",
  "Output Current Range (A) -- 30 – 220",
  "Rated Output Voltage (V) -- 28",
  "Duty Cycle (%) -- 60",
  "Open Circuit Voltage (V) -- 62"
]
    },
    {
      id: 'arc-welder-arc200-mosfet',
      name: 'ARC SERIES -ARC200 (RA20) (with MOSFET)',
      image: ra20,
     points: [
  "Input Voltage (V) -- 230V ± 15%",
  "Frequency (HZ) -- 50 / 60",
  "Rated Input Current (A) -- 43.6",
  "Power (KVA) -- 9.4",
  "Output Current Range (A) -- 30 – 200",
  "Rated Output Voltage (V) -- 28",
  "Open Circuit Voltage (V) -- 58",
  "Duty Cycle (%) -- 60",
  "No-load Loss (W) -- 40"
]
    },
    {
      id: 'air-plasma-cutting',
      name: 'AIR PLASMA CUTTING CUT60G (RC60) ',
      image: cut60g,
      points: [
  "Input Voltage (V) -- AC 415 ± 15%",
  "Frequency (HZ) -- 50 / 60",
  "Rated Input Current (A) -- 11",
  "Power (KVA) -- 7.00",
  "No-load Voltage (V) -- 268",
  "Output Current Range (A) -- 20 – 60",
  "Rated Output Voltage (V) -- 104",
  "Duty Cycle (%) -- 60"
] 
    },
    {
      id: 'mig-mag-series',
      name: 'MIG/MAG SERIES (with MMA) MIG250 (RM25)',
      image: mig250,
     points: [
  "Products Type -- IGBT MIG 250",
  "Model -- RM 25",
  "Input Voltage (V) -- AC 415 ± 15%",
  "Frequency (HZ) -- 50 / 60",
  "Rated Input Current (A) -- 11.1",
  "Power (KVA) -- 8.4",
  "Output Current Range (A) -- 50 – 250",
  "Rated Output Voltage (V) -- 16.5 – 26.5",
  "Duty Cycle (%) -- 60"
]
    }
  ]      
    },
    'pneumatic-tools': {
  name: 'PNEUMATIC TOOLS',
  brand: 'ralliWolf',
  description: 'Pneumatic tools (also called air tools) are power-driven tools that operate using compressed air supplied by an air compressor. ',
  image: pt_main,
  gallery: [
        pt_1,
        pt_2,
        pt_3
  ],
  features: [
    "Toughest Concrete Breaker",
    "Suited for Construction and Demolition",
    "Used in Floors, Pavement and Roads",
  ],
  specifications: {
  "Length (MM)": "540",
  "Impact Rate (BPM)": "1400",
  "Piston Diameter (MM)": "48",
  "Piston Stroke (MM)": "108",
  "Air Inlet (MM)": "19",
  "Air Pressure (Bar)": "6",
  "Shank Size (MM)": "25 x 108",
  "Weight (KG)": "22"
},
  relatedProducts: [
    {
      id: 'air-die-grinder-pg-1101h',
      name: 'Air Die Grinder PG-1101H',
      image: pg_1101h,
      points: [
        "1/4, 28000 r.p.m., 6.3 mm",
        "3.5 cfm, 160mm,",
        " 0.4 kg"
      ]
    },
    {
      id: 'air-screw-driver-sd-5ma',
      name: 'Air Screw Driver SD-5MA',
      image: sd_5ma,
      points: [
        "5 - 7 mm, 9000 r.p.m. 25-30 N. m.",
        "2.0 cfm, 190mm",
        " 0.7 kg"
      ]
    },
    {
      id: 'air-micro-die-grinder-dg-56',
      name: 'Air Micro Die Grinder DG-56',
      image: dg_56,
      points: [
        "3 mm, 56000 r.p.m., 1/4, 7.0 cfm",
        "5 mm, 156 mm",
        " 0.2 kg"
      ]
      
    },
    {
      id: 'composite-impact-wrench-iw-1281',
      name: 'Composite Impact Wrench IW-1281 (1/2” Sq. Drive)',
      image: iw_1281,
     points: [
  "Square Drive -- 1/2\"",
  "Bolt Capacity -- 5/8\" (16mm)",
  "Max Torque -- 1000FT-LB",
  "Free Speed -- 10000 r.p.m.",
  "Air Consumption -- 5.4 cfm",
  "Air Inlet -- 1 / 4\"",
  "Air Hose -- 10 mm",
  "Overall Length -- 193 mm",
  "Net Weight -- 2.2 kg"
]
    }
  ]
    },
    'farm-equipment': {
      name: 'FARM EQUIPMENT',
      brand: 'ralliWolf',
      description: 'Farm equipment refers to the machinery, tools, and implements used in agriculture for preparing land, planting, irrigation, crop protection, harvesting, and post-harvest processing.',
      image: rp30_3,
      gallery: [
        ed52d_ed63d,
        rs58,
      ],
      features: [
        "1pc nylon trimmer head",
        "1pc 3T Blade",
        "Ruixin Carburetor"
      ],
      specifications: {
  "Engine": "1E44F 2 Stroke",
  "Engine Power (KW)": "1.45",
  "Displacement (CC)": "51.7",
  "Power Speed (RPM)": "6500"
}
,
       relatedProducts: [
    {
      id: 'gasoline-water-pump-rp30-3',
      name: 'GASOLINE WATER PUMP RP30-3',
      image: rp30_3,
         points: [
          "Engine -- 168F",
   "Suction Diameter -- 76mm",
   "Discharge Diameter -- 76mm",
   "Total Height Lift -- 28M",
   "Suction Head -- 7M",
   "Horse Power -- 6.5hp",
      ]
    },
    {
      id: 'gasoline-earth-auger-ed52d-ed63d',
      name: 'GASOLINE EARTH AUGER ED52D / ED63D',
      image: ed52d_ed63d,
      points: [
        "Engine -- 44F-5 2 Stroke",
        "Engine Power -- 1.45KW",
        "Displacement -- 52CC",
        "Power Speed -- 6500 r.p.m",

      ]
    },
    {
      id: 'chain-saw-rs58',
      name: 'CHAIN SAW RS58',
      image: rs58,
      points: [
       "Model -- RS63",
"Engine -- Air Cooled, 2 Stroke, Single Cylinder",
"Rated Power Speed -- 2.9 kW / 8500 r/min",
"Chain Pitch -- 0.325\"",
"Displacement -- 63 cc",
"Idling Speed -- 3000±200 r/min",
"Max Speed -- 11000±1000 r/min",

      ]
      
    },
    
  ]
    },
     'industrial-tools': {
      name: 'INDUSTRIAL TOOLS',
      brand: 'ralliWolf',
      description: 'Industrial tools are heavy-duty hand tools, power tools, and machines designed for manufacturing, construction, fabrication, assembly, and maintenance applications. Unlike consumer-grade tools, they are built for continuous operation, precision, and durability in tough environments such as factories, workshops, shipyards, and plants.',
      image: it_main,
      gallery: [
        it_1,
        it_2,
        it_3
      ],
      features: [
        "Light weight, High RPM, No Vibration, Operators Comfort",
      ],
      specifications: {
  "Model": "RHG1600",
  "Voltage": "AC235V",
  "Frequency": "50HZ",
  "Watts Input": "1600W",
  "Full Load Current": "8.5A",
  "Switch Position": "On & Off",
  "Temperature": "1-350°C / 2-550°C",
  "Weight": "0.5 KG"
},
        relatedProducts: [
    {
      id: 'light-duty-drill',
      name: 'LIGHT DUTY DRILL',
      image: light_duty_drill,
      points: [
       "Model -- EG2C",
"Capacity -- 6 mm",
"Watts Input (full Load) -- 235 Watts",
"No Load Speed -- 2800 r.p.m.",
"Approx Net Weight -- 1.9 kg",
"Body -- Unique grip Multi functional Al-die cast",

      ]
    },
    {
      id: 'two-speed-drill',
      name: 'TWO SPEED DRILL TS35C',
      image: two_speed_drill,
      points: [
        "Capacity -- 10 mm / 16 mm",
"Watts Input (full Load) -- 600 Watts",
"No Load Speed -- 1380 r.p.m. & 560 r.p.m.",
"Approx Net Weight -- 5.4 kg",

      ]
    },
    {
      id: 'heavy-duty-drill',
      name: 'HEAVY DUTY DRILL 14130 (13mm)',
      image: heavy_duty_drill,
      points: [
        "Capacity -- 13 mm",
        "Watts Input (full Load) -- 750 Watts",
        "No Load Speed -- 750 r.p.m.",
        "Approx Net Weight -- 4.4 kg",
        
      ] 
    },
    {
      id: 'vertical-sander-vsm',
      name: 'VERTICAL SANDER VSM',
      image: vertical_sander,
      points: [
        "180mm, 500 Watts 2200 r.p.m",
        " 5.4 kg"
      ]
    },
    {
      id: 'portable-tapping-machine',
      name: 'PORTABLE TAPPING MACHINE',
      image: tapping_machine,
      points: [
       "Capacity -- 180 mm",
       "Watts Input (Full Load) -- 500 Watts",
       "No Load Speed -- 2200 r.p.m.",
       "Approx Net Weight -- 4.6 kg",
       

      ]
    }
  ]

    },
    // RALLIWOLF PRODUCTS ENDED HERE
    'aloxide-resin-belts': {
      name: 'ALOXIDE RESIN BELTS',
      brand: 'AIPL Abro',
      description: 'High-performance aluminium oxide resin belts for heavy-duty sanding and grinding applications.',
      image: 'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/7876047/pexels-photo-7876047.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      features: [
        'Light weight, High RPM, No Vibration, Operators Comfort',
        'always supplied by higher pressure',
        'If two signals of different pressure is applied, the higher pressure is connected to outlet (2).',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      },
      applications: [
        'Agricultural products',
        'Construction materials',
        'Chemical industry',
        'Food grains storage',
        'Recycling and waste management'
      ]
    },
    // KATASHI PRODUCTS STARTED FROM HERE
   'impact-wrenches': {
  name: 'IMPACT WRENCH',
  brand: 'katashi',
  description: 'A Katashi impact wrench designed for high torque output, making it ideal for heavy-duty fastening and loosening applications in automotive, construction, and industrial environments.',
  image: katashi_main,
  gallery: [
    katashi_1,
    katashi_2,
    katashi_3,
  ],
  features: [
    "Delivers high torque with minimal effort",
    "Durable motor and hammer mechanism for long service life",
    "Ergonomic grip design for operator comfort",
  ],
  specifications: {
    "Bolt Size": "8-12",
    "Free Speed": "11000",
    "Weight ": "1.1 kg - 4.9kg ",
    "Overall Length": "240",
  },
       relatedProducts: [
    {
      id: 'iw-381s',
      name: 'IW-381S',
      image: iw_381s,
      points: [
        'Bolt Size (MM): 6-8',
        'Free Speed (RPM): 8500',
        'Max Torque NM(FT-LB): 85 (62)',
        'Overall Length: 200',
        'Weight (KG): 1.1',
        'Air Inlet: 1/4'
      ]
    },
    {
      id: 'iw-382s',
      name: 'IW-382S',
      image: iw_382s,
      points: [
        "Bolt Size (MM): 10-12",
        "Free Speed (RPM): 7700",
        "Max Torque NM(FT-LB): 125 (92)",
        "Overall Length: 225",
        "Weight (KG): 1.2",
        "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'iw-383s',
      name: 'IW-383S',
      image: iw_383s,
      points: [
        "Bolt Size (MM): 10-14",
        "Free Speed (RPM): 8200",
        "Max Torque NM(FT-LB): 150 (110)",
        "Overall Length: 220",
        "Weight (KG): 1.3",
        "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'iw-3811p',
      name: 'IW-3811P',
      image: iw_311p,
      points: [
        "Bolt Size (MM): 8-12",
        "Free Speed (RPM): 10000",
        "Max Torque NM(FT-LB): 270 (200)",
        "Overall Length: 165",
        "Weight (KG): 1.6",
        "Air Inlet: 1/4”"
      ]
    },
  ]
    },
  //  2nd product
  'screw-drivers': {
  name: 'SCREW DRIVER',
  brand: 'katashi',
  description: 'Katashi screw drivers are versatile hand tools designed to tighten or loosen screws with accuracy. Built with a durable hardened steel shaft and ergonomic grip, these screw drivers provide maximum comfort and torque during repetitive use. Available in multiple tip types and sizes.',
  image: sd_main,
  gallery: [
       sd_1,
       sd_2,
       sd_3
  ],
  features: [
    "Ergonomic non-slip grip handle for comfort and better control",
    "Hardened chrome-vanadium steel blade for long life and durability",
    "Available in multiple tip types (Flat, Phillips, Torx) for versatile use"
  ],
  specifications: {
    "Model No": "Sd-90pqc, Sd-91pqc, Sd-92aqc, sd-93pqc",
    "Free Speed": "1800-10500 RPM",
    "MAx Torque": "10-135",
    "Weight": "0.9kg - 1.3kg",
    "Hex Shank": "1/4"
  },
       relatedProducts: [
    {
      id: 'sd-04sqc',
      name: 'SD-04SQC',
      image: sd_04sqc,
      points: [
        "Capacity (MM): M5-8",
        "Free Speed (RPM): 9000",
        "Max Torque (NM): 80",
        "Overall Length: 210",
        "Weight (KG): 1.0",
        "Hex Shank: 1/4"
      ]
    },
    {
      id: 'sd-05sqc',
      name: 'SD-05SQC',
      image: sd_05sqc,
      points: [
        "Capacity (MM): M 5-6",
        "Free Speed (RPM): 9500",
        "Max Torque (NM): 35",
        "Overall Length: 185",
        "Weight (KG): 0.7",
        "Hex Shank: 1/4”"

      ]
    },
    {
      id: 'sd-06sqc',
      name: 'SD-06SQC',
      image: sd_06pqc,
      points: [
       "Capacity (MM): M5-8",
       "Free Speed (RPM): 8500",
       "Max Torque (NM): 55",
       "Overall Length: 165",
       "Weight (KG): 0.85",
       "Hex Shank: 1/4”"
      ]
    },
    {
      id: 'sd-09pqc',
      name: 'SD-09PQC',
      image: sd_09pqc,
      points: [
        "Capacity (MM): M 6-10",
  "Free Speed (RPM): 7500",
  "Max Torque (NM): 100",
  "Overall Length: 175",
  "Weight (KG): 1.2",
  "Hex Shank: 1/4”"
      ]
    },
  ]
    },
    // 3rd product
    'drill': {
  name: 'DRILL',
  brand: 'katashi',
  description: 'Katashi drill machines are powerful and reliable tools designed for drilling holes in wood, metal, concrete, and plastic. Widely used in construction, automotive, woodworking, and DIY projects, these drills deliver high torque, variable speed, and ergonomic handling for both professional and industrial applications.',
  image: drill_main,
  gallery: [
    drill_1,
    drill_2,
    drill_3,
  ],
  features: [
    "Compact and lightweight design for easy handling",
    "Variable speed control for precision drilling in different materials",
    "Ergonomic grip to reduce operator fatigue during long use",
  ],
  specifications: {
    "Drive/Shank": "1/2 - 3/8",
    "Power": "0.8 - 12",
    "Free Speed (RPM) ": "1800 - 22000",
    "Air inlet": "1/4"
  },
       relatedProducts: [
    {
      id: 'dm-102shl',
      name: 'DM-102SHL (Tier Buffer)',
      image: dm102shl,
      points: [
        "Drive/Shank: 3/8",
"Power (HP): 0.8",
"Free Speed (RPM): 22000",
"Overall Length: 180",
"Weight (KG): 0.7",
"Air Inlet: 1/4"

      ]
    },
    {
      id: 'dm-104slr',
      name: 'DM-104SLR',
      image: dm104slr,
      points: [
        "Drive/Shank: 3/8”",
"Capacity (MM): 10",
"Free Speed (RPM): 1800",
"Overall Length: 203",
"Weight (KG): 1.1",
"Air Inlet: 1/4”"
      ]
    },
    {
      id: 'dm-106ar',
      name: 'DM-106ar',
      image: dm106ar,
      points: [
      "Drive/Shank: 3/8”",
"Power (HP): 1.0",
"Free Speed (RPM): 500",
"Overall Length: 180",
"Weight (KG): 1.1",
"Air Inlet: 1/4”"
      ]
    },
    {
      id: 'dm-108pr',
      name: 'DM-108PR',
      image: dm108pr,
      points: [
       "Drive/Shank: 3/8”",
"Power (HP): 0.8",
"Free Speed (RPM): 3500",
"Overall Length: 190",
"Weight (KG): 1.1",
"Air Inlet: 1/4”"

      ]
    },
  ]
    },
    // 4th product
    'angle-grinders': {
  name: 'ANGLE GRINDER',
  brand: 'katashi',
  description: 'Katashi angle grinders are versatile and compact power tools designed for grinding, polishing, sanding, honing, and shaping a wide range of materials including metal, wood, and plastic. They are widely used in automotive, metalworking, woodworking, and fabrication industries for precision finishing and detailed work.',
  image: ag_main,
  gallery: [
    ag_1,
    ag_2,
    ag_3
  ],
  features: [
    "Ergonomic grip for operator comfort and reduced fatigue",
    "Durable high-performance motor with long service life",
    "Ideal for deburring, surface preparation, and finishing tasks",
  ],
  specifications: {
    "Capacity MM (Inch)": "102 - 127",
    "Free Speed (RPM)": "12000 - 15000",
    "Overall Length (MM)": "155 - 246",
    "Weight (KG)": "0.6kg - 1.7kg",
    "Air Hose ID (MM)": "8”"
  },
       relatedProducts: [
    {
      id: 'ag-25l',
      name: ' AG-25L',
      image: ag_25l,
      points: [
        "Capacity MM (Inch): 52 (2”)",
        "Free Speed (RPM): 15000",
        "Overall Length (MM): 175",
        "Weight (KG): 0.6",
        "Air Hose ID (MM): 8"
      ]
    },
    {
      id: 'ag-27r',
      name: 'AG-27R',
      image: ag_27r,
      points: [
        "Capacity MM (Inch): 52 (2”)",
        "Free Speed (RPM): 15000",
        "Overall Length (MM): 155",
        "Weight (KG): 0.6",
        "Air Hose ID (MM): 8"
      ]
    },
    {
      id: 'ag-42l',
      name: 'AG-42L',
      image: ag_42l,
      points: [
        "Capacity MM (Inch): 102 (4”)",
        "Free Speed (RPM): 12000",
        "Overall Length (MM): 242",
        "Weight (KG): 1.9",
        "Air Hose ID (MM): 8"
      ]
    },
    {
      id: 'ag-44r',
      name: 'AG-44R',
      image: ag_44r,
      points: [
       "Capacity MM (Inch): 102 (4”)",
       "Free Speed (RPM): 13500",
       "Overall Length (MM): 246",
       "Weight (KG): 1.3",
       "Air Hose ID (MM): 8"
      ]
    },
  ]
    },
    // 5th Product
    'die-grinders': {
  name: 'DIE GRINDER',
  brand: 'katashi',
  description: 'Katashi die grinders are compact, high-speed pneumatic tools designed for precision grinding, polishing, deburring, and finishing applications. Powered by compressed air, they deliver stable performance, low vibration, and longer durability compared to electric grinders, making them ideal for both industrial and professional use.',
  image: dg_main,
  gallery: [
    dg_1,
    dg_2,
    dg_3
  ],
  features: [
    "Compact and lightweight design for better maneuverability",
    "Ergonomic grip to reduce operator fatigue during long use",
    "Durable motor ensures long service life and reliability",
  ],
  specifications: {
    "Free Speed (RPM)": "20000 - 24000",
    "Collet Size (MM)": "6",
    "Overall Length (MM)": "165",
    "Weight (KG)": "0.5 - 5.2",
    "Air Inlet": "1/4"
  },
  relatedProducts: [
    {
      id: 'dg-064s',
      name: ' DG-064S',
      image: dg_064s,
      points: [
        "Free Speed (RPM): 22000",
  "Collet Size (MM): 6",
  "Overall Length (MM): 165",
  "Weight (KG): 0.6",
  "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'dg-065s',
      name: 'DG-065S',
      image: dg_065s,
      points: [
        "Free Speed (RPM): 20000",
        "Collet Size (MM): 6",
        "Overall Length (MM): 170",
        "Weight (KG): 0.7",
        "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'dg-066s-rh',
      name: 'DG-066S-RH',
      image: dg_066s_rh,
      points: [
       "Free Speed (RPM): 24000",
       "Collet Size (MM): 6",
       "Overall Length (MM): 170",
       "Weight (KG): 0.7",
       "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'dg-067-sl-rh',
      name: 'DG-067 SL-RH',
      image: dg_067_sl_rh,
      points: [
       "Free Speed (RPM): 18000/21000",
       "Collet Size (MM): 6",
       "Overall Length (MM): 317",
       "Weight (KG): 2.45",
       "Air Inlet: 1/4”"
      ]
    },
  ]
    },
    // 6th product
    'air-hammers': {
  name: 'AIR HAMMER',
  brand: 'katashi',
  description: 'Katashi air hammers are powerful pneumatic tools designed for heavy-duty applications such as metal shaping, cutting, riveting, and welding support. They deliver rapid hammering action with high impact force, making them ideal for both industrial and professional use where strength and precision are required.',
  image: ah_main,
  gallery: [
    ah_1,
    ah_2,
    ah_3
  ],
  features: [
    "Delivers rapid and powerful hammering action for heavy-duty tasks",
    "Lightweight and compact design for ease of handling",
    "Variable speed trigger for precise control over strokes per minute",
  ],
  specifications: {
    "Blows Per Minute (BPM)": "2000 – 5000 (depending on model)",
    "Piston Stroke (MM)": "70 – 165 ",
    "Length (NM)": "160 – 710",
    "Weight (KG)": "1.5 – 3.0"
  },
       relatedProducts: [
    {
      id: 'ah-75rh',
      name: 'AH-75RH',
      image: ah_75rh,
      points: [
         "Shank Size: 0.401”",
         "Piston Stroke (MM): 70",
         "Blows Per Minute: 2800",
         "Overall Length (MM): 160",
         "Net Weight (KG): 1.6"
      ]
    },
    {
      id: 'ah-76rc',
      name: 'AH-76RC',
      image: ah_76rc,
      points: [
        "Shank Size: 0.401",
        "Piston Stroke (MM): 80",
        "Blows Per Minute: 3000",
        "Overall Length (MM): 215",
        "Net Weight (KG): 1.6"
      ]
    },
    {
      id: 'ch-78-3h',
      name: 'CH-78-3H',
      image: ch_78_3h,
      points: [
        "Shank Size: 14.7 MM",
        "Piston Stroke (MM): 76",
        "Blows Per Minute: 1950",
        "Overall Length (MM): 380",
        "Net Weight (KG): 6.5"
      ]
    },
    {
      id: 'dh-79',
      name: 'DH-79',
      image: dh_79,
      points: [
      "Shank Size: 1-1.4 x 6",
      "Piston Stroke (MM): 165",
      "Blows Per Minute: 1200",
      "Overall Length (NM): 710",
      "Net Weight (KG): 37"
      ]
    },
  ]
    },
    // 7th product
   'riveters': {
  name: 'RIVETERS',
  brand: 'katashi',
  description: 'Katashi riveters are reliable tools designed to join two or more materials with strong and permanent metal rivets. They are ideal for applications in construction, automotive, fabrication, and manufacturing where durable fastening is essential. Available in manual, pneumatic, and hydraulic models for different workloads.',
  image: riv_main,
  gallery: [
    riv_1,
    riv_2,
    riv_3
  ],
  features: [
    "Works with aluminum, steel, and stainless-steel rivets",
    "Air/hydraulic riveters ensure fast and consistent riveting",
    "Ergonomic grip reduces operator fatigue during continuous use",
  ],
  specifications: {
    "Rivet Capacity (MM)": "2.4 – 6.4",
    "Pulling Force (KN)": "8 – 20 (depending on model)",
    "Air Pressure (PSI)": "85 – 115 (for pneumatic models)",
    "Air Consumption (CFM)": "3 – 5",
    "Overall Length (MM)": "250 – 320",
    "Weight (KG)": "1.2 – 2.8"
  },
       relatedProducts: [
    {
      id: 'hr-3164k',
      name: 'HR-3164K',
      image: hr_3164k,
      points: [
        "Rivet Capacity (mm): 3/32” (2.4), 1/8” (3.2), 5/32” (4.0), 3/16” (4.8)",
        "Stroke Length (mm): 16",
        "Traction Power (LBS/KG): 1888/855",
        "Overall Length (mm): 270",
        "Weight (KG): 1.4"
      ]
    },
    {
      id: 'hr-3166hd',
      name: 'HR-3166HD',
      image: hr_3166hd,
      points: [
        "Rivet Capacity (mm): 3/32” (2.4), 1/8” (3.2), 5/32” (4.0), 3/16” (4.8)",
        "Stroke Length (mm): 16",
        "Traction Power (LBS/KG): 1987/900",
        "Overall Length (mm): 295",
        "Weight (KG): 1.4"

      ]
    },
    {
      id: 'hr-147hd',
      name: 'HR-147HD',
      image: hr_147hd,
      points: [
       "Rivet Capacity (mm): 3/32” (2.4), 1/8” (3.2), 5/32” (4.0), 3/16” (4.8), 1/4” (6.4)",
       "Stroke Length (mm): 15",
       "Traction Power (LBS/KG): 3577/1620",
       "Overall Length (mm): 275",
       "Weight (KG): 1.8"
      ]
    },
    {
      id: 'hr-3168y',
      name: 'HR-3168Y',
      image: hr_3168y,
      points: [
        "Rivet Capacity (mm): 3/32” (2.4), 1/8” (3.2), 5/32” (4.0), 3/16” (4.8)",
        "Stroke Length (mm): 16",
        "Traction Power (LBS/KG): 2600/1180",
        "Overall Length (mm): 250",
        "Weight (KG): 1.4"
      ]
    },
  ]
    },
    // 8th product
    'electric-screw-drivers': {
  name: 'ELECTRIC SCREW DRIVER',
  brand: 'katashi',
  description: 'Katashi electric screw drivers are compact, efficient tools designed for fastening and unfastening screws with precision and speed. They are widely used in assembly lines, electronics, furniture, and general repair tasks. With ergonomic design and adjustable torque settings, they ensure consistent results and reduced operator fatigue.',
  image: esd_main,
  gallery: [
    esd_1,
    esd_2,
    esd_3
  ],
  features: [
    "Adjustable torque settings for precision fastening",
    "Ergonomic handle for comfort during extended use",
    "Lightweight design reduces operator fatigue",
  ],
  specifications: {
    "Free Speed(RPM)": "900 - 1150",
    " Input (volt)": "280 – 600 (depending on model)",
    "Clutch Accuracy": "3%",
    "Torque (KGF.CM)": "3 – 60",
    "Weight (KG)": "0.5 – 0.7"
  },
       relatedProducts: [
    {
      id: 'ess145-dc',
      name: 'ESS145-DC',
      image: ess145_dc,
      points: [
         "Free Speed (RPM): 1150",
         "Input (Volt): 36",
         "Torque (KGF.CM): 3-35",
         "Clutch Accuracy: 3%",
         "Weight (KG): 0.5",
         "Noise Label (DBA): 55"
      ]
    },
    {
      id: 'ess146-ac',
      name: 'ESS146-AC',
      image: ess146_ac,
      points: [
        "Free Speed (RPM): 1000",
        "Input (Volt): 200-240",
        "Torque (KGF.CM): 3-30",
        "Clutch Accuracy: 3%",
        "Weight (KG): 0.5",
        "Noise Label (DBA): 65"

      ]
    },
    {
      id: 'ess147-ac',
      name: 'ESS147-AC',
      image: ess147_ac,
      points: [
        "Free Speed (RPM): 1000",
        "Input (Volt): 200-240",
        "Torque (KGF.CM): 5-60",
        "Clutch Accuracy: 3%",
        "Weight (KG): 0.6",
        "Noise Label (DBA): 65"
      ]
    },
    {
      id: 'esp148-ac',
      name: 'ESP148-AC',
      image: esp148_ac,
      points: [
        "Free Speed (RPM): 1000",
        "Input (Volt): 200-240",
        "Torque (KGF.CM): 5-60",
        "Clutch Accuracy: 3%",
        "Weight (KG): 0.6",
        "Noise Label (DBA): 65"
      ]
    },
  ]
    },
    // 9th product
    'sanders-polishers': {
  name: 'SANDER POLISHER',
  brand: 'katashi',
  description: 'Katashi sander polishers are versatile tools designed for surface finishing, sanding, and polishing on metal, wood, and automotive bodies. With variable speed control and ergonomic handling, they provide smooth, swirl-free results for both professional and DIY applications.',
  image: sp_main,
  gallery: [
    sp_1,
    sp_2,
    sp_3
  ],
  features: [
    "Variable speed control for different applications",
    "Ergonomic handle with soft grip for operator comfort",
    "High-quality motor ensures consistent performance",
  ],
  specifications: {
    "Pad Size (inch-mm)": "3,4,5 - 127",
    "Free Speed (RPM)": "10000 - 12000",
    "Air inlet": "1/4",
    "Weight (KG)": "0.5 – 8.0",
  },
       relatedProducts: [
    {
      id: 'bs-10s',
      name: 'BS-10S',
      image: bs_10s,
      points: [
        "Belt Size (inch-mm): 10×330",
        "Free Speed (RPM): 16000",
        "Overall Length (NM): 290",
        "Weight (KG): 0.8",
        "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'bs-20s',
      name: 'BS-20S',
      image: bs_20s,
      points: [
        "Belt Size (inch-mm): 20×520",
        "Free Speed (RPM): 16000",
        "Overall Length (NM): 375",
        "Weight (KG): 1.3",
        "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'ap-35p',
      name: 'AP-35P',
      image: ap_35p,
      points: [
       'Pad Size (inch-mm): 3” (76 mm)',
       'Free Speed (RPM): 3200',
       'Overall Length (NM): 160',
       'Weight (KG): 0.9',
       'Air Inlet: 1/4”'
      ]
    },
    {
      id: 'ap-36p',
      name: 'AP-36P',
      image: ap_36p,
      points: [
       "Pad Size (inch-mm): 3” (76 mm)",
       "Free Speed (RPM): 2500",
       "Overall Length (NM): 115",
       "Weight (KG): .8",
       "Air Inlet: 1/4”"
      ]
    },
   
  ]
    },
    //10th product
    'ratchets': {
  name: 'RATCHET',
  brand: 'katashi',
  description: 'A Ratchet is a hand tool designed for tightening or loosening nuts and bolts with ease and efficiency. Featuring a gear mechanism, it allows continuous turning in one direction without removing the tool from the fastener. Katashi ratchets are built with durable materials and ergonomic handles for long-lasting performance in automotive, industrial, and general repair applications.',
  image: rat_main,
  gallery: [
    rat_1,
    rat_2,
    rat_3
  ],
  features: [
    "Reversible gear mechanism for tightening and loosening",
    "Quick-release button for easy socket changes",
    "Ergonomic non-slip grip handle",
    "Durable chrome-vanadium steel construction"
  ],
  specifications: {
    "Drive/Shank:": "1/4”, 3/8”, 1/2” (depending on model)",
    "Capacity (NM):": "68 – 180",
    "Free Speed (RPM)": "170-7000",
    "Weight (KG)": "1.2 – 1.8",
    "Air Inlet": "1.2 – 1.8"

    
  },
       relatedProducts: [
    {
      id: 'rw-389hs',
      name: 'RW-389HS',
      image: rw_389hs,
      points: [
         "Drive/Shank: 3/8”",
         "Capacity (NM): 180",
         "Free Speed (RPM): 7000",
         "Overall Length: 340",
         "Weight (KG): 1.8",
         "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'rw-387',
      name: 'RW-387',
      image: rw_387,
      points: [
        "Drive/Shank: 3/8”",
        "Capacity (NM): 68",
        "Free Speed (RPM): 170",
        "Overall Length: 230",
        "Weight (KG): 1.8",
        "Air Inlet: 1/4”"
      ]
    },
    {
      id: 'rw-122c',
      name: 'RW-122C',
      image: rw_122c,
      points: [
        "Drive/Shank: 1/2”",
        "Capacity (NM): 120",
        "Free Speed (RPM): 280",
        "Overall Length: 275",
        "Weight (KG): 1.2",
        "Air Inlet: 1/4”"
      ]
    },
    
  ]
    }, 
    // KATASHI PRODUCTS END HERE

    // AIPL ABRO PRODUCTS START HERE

   'narrow-belts': {
  name: 'NARROW BELTS',
  brand: 'aiplabro',
  description: 'Narrow belts are precision-engineered abrasive belts with small widths and varying lengths, specially designed for grinding, sanding, deburring, finishing, and polishing tasks in metalworking, woodworking, glass, leather, and composite industries.',
  image: aloxide_resin_belts,
  gallery: [
    aloxide_resin_supreme_belts,
    fle_xii_belts,
    ziconium_belts
  ],
  features: [
    "High precision grinding and de-burring of metals",
    "Final polishing of forged and cast components",
    "Blending, shaping, and finishing on curved or intricate surfaces",
    "Durable construction for extended belt life",
    "Compatible with multiple industries like metal, wood, glass, and leather"
  ],
  specifications: {
    "Metal Fabrication": "Deburring, weld removal, and surface preparation.",
    "Woodworking": "Sanding curves, edges, and intricate designs.",
    "Glass & Ceramics": "Smoothing, edge finishing, and polishing.",
    "Automotive & Aerospace": "Finishing engine parts, turbine blades, and molds.",
    "Leather & Composites": "Shaping, finishing, and polishing applications."
  },
       relatedProducts: [
    {
      id: 'alo-xide-resin-belts',
      name: 'ALOXIDE RESIN BELTS',
      image: aloxide_resin_belts,
      points: [
         "Availability: In Stock",
         "Narrow belts < 600 mm",
         "Code CC34X [Grits 36, 60, 80,120, 220, 320, 400]",
      ]
    },
    {
      id: 'alo-xide-resin-supreme-belts',
      name: 'ALOXIDE RESIN SUPREME BELTS',
      image: aloxide_resin_supreme_belts,
      points: [
        "AVAILABILITY",
        "Code CP44N",
        "[Grits 36, 60, 80,120, 220, 320, 400]",
      ]
    },
    {
      id: 'fle-xii-belts',
      name: 'FLE XII BELTS',
      image: fle_xii_belts,
      points: [
        "AVAILABILITY",
        "Narrow belts < 450 mm",
        "Code CC44J [Grits 60, 80, 120, 220, 320, 400]",
      ]
    },
     {
      id: 'zirconium-belts',
      name: 'ZIRCONIUM BELTS',
      image: ziconium_belts,
      points: [
        "AVAILABILITY",
        "Narrow belts < 450 mm",
        "Code BZP 628",
        "[Grits 36, 60, 80,120]"
      ]
    },
    
  ]
    }, 
   'wide-belts': {
  name: 'WIDE BELTS',
  brand: 'aiplabro',
  description: 'Wide belts are large-format abrasive belts designed for high-performance sanding, grinding, and finishing of broad surfaces. They are mainly used in wide belt sanding machines for industrial-scale processing of wood, metal, veneer, particle boards, composites, plastics, and other sheet materials.',
  image:     aluminium_belts,
  gallery: [
    silicon_belts,
    aluminium_belts,
    zirconia_belts
  ],
  features: [
    "Antistatic coating option to prevent dust build-up during woodworking",
    "High efficiency and productivity in continuous production lines",
    "Suitable for both dry and wet grinding applications",
  ],
  specifications: {
    "Heavy-Duty Sanding": "Ideal for calibration and surface leveling of panels and boards.",
    "Productivity": "Reduces time and effort for large-scale sanding tasks.",
    "Durability": "Withstands high belt tension, heavy pressure, and long runs.",
    "Accuracy": "Uniform grain distribution ensures smooth and precise finishing.",
    "Machine Compatibility": "Adaptable to different wide belt sanding machines.",
    "Clogging Resistance": "Prevents burning, clogging, and dust accumulation on sensitive materials."
  },
       relatedProducts: [
    {
      id: 'silicon-carbide-wide-belts',
      name: 'SILICON CARBIDE WIDE BELTS',
      image: silicon_belts,
      points: [
         "Code: DCY 658",
         "Grits: 36, 40, 50, 60, 80, 100, 120, 150, 180, 220",
         "Width: 610 ~1350mm"
      ]
    },
    {
      id: 'aluminium-oxide-wide-belts',
      name: 'ALUMINIUM OXIDE WIDE BELTS',
      image: aluminium_belts,
      points: [
        "Code: CC34X / CC44N/CP44N",
        "Grits: 36, 40, 50, 60, 80, 100, 120, 150, 180, 220",
        "Width: 610 ~1350mm"
      ]
    },
    {
      id: 'zirconia-wide-belts',
      name: 'ZIRCONIA WIDE BELTS',
      image: zirconia_belts,
      points: [
        "Code: BZP 628",
        "Grits: 36, 60, 80, 100, 120",
        "Width: 610 ~1350mm"
      ]
    },
    
  ]
    },
     'cloth-roll': {
  name: 'CLOTH ROLL',
  brand: 'aiplabro',
  description: 'Cloth rolls are flexible abrasive materials designed for surface preparation, sanding, polishing, and finishing applications. They can be easily cut into desired lengths, making them suitable for hand use or machine operations in metalworking, woodworking, and general maintenance.',
  image: cc34x,
  gallery: [
    cc44j,
    cc44n,
    masking_tape
  ],
  features: [
    "Flexible and easy to cut into required lengths for versatile applications",
    "Ideal for light grinding, polishing, and finishing of various materials",
    "Provides consistent performance with uniform abrasive grain distribution"
  ],
  specifications: {
    "Material": "Aluminium oxide / Silicon carbide cloth backing",
    "Applications": "Suitable for sanding, polishing, finishing, and cleaning",
    "Surface Types": "Works on metal, wood, composites, and plastic surfaces",
    "Form": "Available in rolls of different widths and lengths",
    "Usability": "Can be used manually or with machines",
    "Durability": "Strong cloth backing ensures long service life"
  },
       relatedProducts: [
    {
      id: 'cc34x',
      name: 'CC34X',
      image: cc34x,
      points: [
        "∙ Abrasive: Aluminium oxide grains",
         "Backing: X-wt. cloth backing",
         "Coating: Resin/Resin coating",
         "Grit Range: 36-400",
         "Width: 75, 100, 150, 228, 250, 300 mm",
         "∙ Standard Length: 50 meter"
      ]
    },
    {
      id: 'cc44j',
      name: 'CC44J',
      image: cc44j,
      points: [
        "Abrasive: Aluminium oxide grains",
        "Backing: X-wt. premium cloth backing",
        "Coating: Resin /Resin coating",
        "Grit Range: 36-400",
        "Width: 75, 100, 150, 228, 250, 300 mm",
        "Standard Length: 50 meter"
      ]
    },
    {
      id: 'cc44n',
      name: 'CC44N',
      image: cc44n,
      points: [
        "Abrasive: Aluminium oxide grains",
        "Backing: J-wt. cloth backing",
        "Coating: Resin /Resin coating",
        "Grit Range: 60-400",
        "Width: 75, 100, 150, 228, 250, 300 mm",
        "Standard Length: 50 meter"
      ]
    },
    {
      id: 'masking-tape',
      name: 'MASKING TAPE',
      image: masking_tape,
      points: [
        "High performance",
        "Multipurpose usage",
        "100% guaranteed length",
        "Pressure sensitive adhesive tape",
        "Will not tear while removing",
        "No adhesive residue after removal"
      ]
    },
    
  ]
    },
     'abrasive-paper': {
  name: 'ABRASIVE PAPER',
  brand: 'aiplabro',
  description: 'Abrasive paper, also known as sandpaper, is widely used for sanding, smoothing, and finishing surfaces. Available in different grit sizes, it is suitable for hand use or with sanding machines across woodworking, metalworking, automotive, and general maintenance industries.',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJPm8svNMsyA5bicjb5udE54YVvnhaK2Pu-UOBOwc1pNN-46LFGSr3pLCt6SKtBx4SSA&usqp=CAU',
  gallery: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_MBz6Vd-fpygCiBq1d_acauFYkt2rECFaw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTB_1OpSSQwZFXR2-laOQjnAIlSXMLNPLrQ&s',
    'https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/foam-blocks.jpg'
  ],
  features: [
    "Available in a wide grit range for rough sanding to fine finishing",
    "Compatible with hand sanding or machine sanding operations",
    "Provides smooth, controlled finishing on wood, metal, paint, and plastics"
  ],
  specifications: {
    "Applications": "Surface preparation, smoothing, polishing, and finishing",
    "Grit Range": "24 (very coarse) – 3000+ (ultra-fine)",
    "Abrasive Types": "Aluminum Oxide, Silicon Carbide, Zirconia, Ceramic",
    "Backing Options": "Lightweight paper, heavy-duty paper, cloth, or film",
    "Usage": "Suitable for woodworking, metalworking, automotive, and general use"
  },
       relatedProducts: [
    {
      id: 'water-proof-paper',
      name: 'WATER PROOF PAPER',
      image: water_proof_paper,
      points: [
         "Aluminium oxide grain",
         "Latex paper",
         "Superior design",
         "Consistent finish",
         "Size : 230 mm x 280 mm",
         "Grit range - 60 - 3000"
      ]
    },
  ]
    },
     'gric-disc': {
  name: 'GRIP DISC',
  brand: 'aiplabro',
  description: 'AIPL Gold Grip Disc is a lightweight paper-backed abrasive disc with high-quality grain and strong resin bonding, designed for efficient sanding, grinding, and finishing applications on wood, metal, paint, and composites.',
  image: hole_grid_disc,
  gallery: [
    hole_grid_disc,
    film_grid_disc,
    aipl_gold_flap_disc
  ],
  features: [
    "Hook & loop backing ensures quick attachment and removal",
    "Resin-bonded grain provides longer life and consistent finish",
    "Suitable for dry sanding on wood, paint, metal, and plastics"
  ],
  specifications: {
    "Available Sizes": "75 mm, 125 mm, 150 mm, 180 mm (custom sizes available)",
    "Grit Range": "40 – 2000",
    "Backing": "Paper with hook & loop fastening",
    "Applications": "Sanding, de-burring, finishing, and surface preparation",
    "Industries": "Woodworking, automotive refinishing, metal fabrication, general industry"
  },
       relatedProducts: [
    {
      id: '150mm-6-hole-grip-disc',
      name: '150MM 6 HOLE GRIP DISC',
      image: hole_grid_disc,
      points: [
         "Open coat",
         "Size : 150 mm with 6 holes",
         "Grit 36 - 1200",
         "High cutting performance",
         "Good sharpness",
         "Anti clogging"
      ]
    },
    {
      id: 'film-grip-disc',
      name: 'FILM GRIP DISC',
      image: film_grid_disc,
      points: [
        "Premium aluminium oxide grain",
        "Polyester film backing",
        "Phenolic resin coated",
        "Open coat",
        "Size : 150 mm with 6 holes",
        "Grit Range - 36 - 2000",
        "Superior surface finish and longer life"
      ]
    },
    {
      id: 'aipl-gold-flap-disc',
      name: 'AIPL GOLD FLAP DISC',
      image: aipl_gold_flap_disc,
      points: [
        "Drive/Shank: 1/2”",
        "Capacity (NM): 120",
        "Free Speed (RPM): 280",
        "Overall Length: 275",
        "Weight (KG): 1.2",
        "Air Inlet: 1/4”"
      ]
    },
   
  ]
    },
     'psa-disc': {
  name: 'PSA DISC',
  brand: 'aiplabro',
  description: 'PSA (Pressure Sensitive Adhesive) discs are sanding discs with a strong adhesive backing, ensuring secure attachment to the pad. Ideal for high-precision sanding, finishing, and surface preparation across multiple industries.',
  image: no_hole_psa_disc,
  gallery: [
    no_hole_psa_disc,
    with_hole_psa_disc
  ],
  features: [
    "Strong pressure-sensitive adhesive backing for firm grip",
    "Provides uniform sanding and smooth finish",
    "Suitable for wood, paint, metal, and composite surfaces"
  ],
  specifications: {
    "Available Sizes": "75 mm, 100 mm, 125 mm, 150 mm, 180 mm",
    "Grit Range": "36 – 2000",
    "Backing": "Paper / Film with adhesive coating",
    "Applications": "Finishing, polishing, deburring, and surface preparation",
    "Industries": "Automotive refinishing, woodworking, metal fabrication, general industry"
  },
       relatedProducts: [
    {
      id: '125mm-no-hole-psa-disc',
      name: '125MM NO HOLE PSA DISC',
      image: no_hole_psa_disc,
      points: [
         "∙ Premium paper disc - no hole",
         "Latex paper backing",
         "Phenolic resin coated",
         "Size: 125 mm",
         "Grit 60, 80 , 100, 120 ,150, 180, 220, 320, 400, 600"
      ]
    },
    {
      id: '125mm-with-hole-psa-disc',
      name: '125MM WITH HOLE PSA DISC',
      image: with_hole_psa_disc,
      points: [
         "PSA DISC With 5 Hole",
         "Latex paper and strong resin",
         "Better performance & longer life",
         "Size : 125 mm with hole",
         "Grit 60, 80 , 100, 120 ,150, 180, 220, 320, 400, 600"
      ]
    },  
  ]
    },
 //Milestone product started from here 
 'cutter-knives': {
  name: 'CUTTER AND KNIVES ',
  brand: 'miles',
  description: 'All plastic body with Auto lock mechanism. Provision for Hanging/Key Chain.',
  image: cutter,
  gallery: [
    miles_cutter_1,
    miles_cutter_2,
  ],
  features: [
    
    'Ergonomic Design – Comfortable, non-slip grip handle for better control and precision.',
    'High-Quality Segmented Blade – Durable, sharp blade with multiple segments for extended use.',
    'Retractable Blade Mechanism – Adjustable blade length for safety and convenience'
  ],
  specifications: {
  "Use": "Right Hand Use",
  "Used for": "Cutting paper, cardboard, plastic sheets, leather, foam, and thin metal sheets",
  "Blade Segments": "8",
  "Lock Type": "Auto-Lock",
  "Grip Type": "Rubber Anti-Slip",
  "Overall Length (MM)": "160",
  "Blade Thickness (MM)": "0.5",
  "Blade Width (MM)": "18",
  "Blade Type": "Snap-off Replaceable",
  "Handle Material": "ABS + Rubber Grip",
  "Body Finish": "Anti-Rust Coating",
  "Color": "Yellow & Black",
  "Cutting Depth (MM)": "20",
  "Blade Material": "SK5 High Carbon Steel",
  "Weight (KG)": "0.15",
  "Packaging": "Single Blister Pack",
  "Special Features": "Retractable blade, quick blade change, compact and lightweight design"
},
  relatedProducts: [
    {
      id: 'pa901',
      name: 'mini-PA901 9mm',
      image: minipa901,
      points: [
        "9mm blade, spring-loaded retraction",
        "Plastic body, 120mm length",
        "0.06 kg"
      ]
    },
    {
      id: 'pn1801',
      name: 'PN1801 18mm',
      image: pn1801,
      points: [
        "Manual lock",
        "Hang hole",
        "Right hand use"
      ]
    },
    {
      id: 'pn902',
      name: 'PN902 9mm',
      image: pn902,
      points: [
        "Manula lock",
        "Hang hole",
        "Right hand use"
      ]
    },
    {
      id: 'precision-cutter-pc-9',
      name: 'FN1802 18mm',
      image: fn1802,
      points: [
         "Manual lock",
        "Hang hole",
        "Right hand use"
      ]
    }
  ]
},
'manual-tools': {
  name: 'MANUAL TOOLS',
  brand: 'miles',
  description: 'All metal robust construction. Sleek design with no loose parts. Easy drop-in loading with reload indicato. Hand lockfor easy storage. Ergonomic handlewith soft rubber grip for extra workingcomfort & least fatigue',
  image: m21200,
  gallery: [
    
  ],
  features: [
    "Chrome Vanadium Steel Construction",
    "Wide Jaw Opening Capacity",
    "Bi-Material Comfort Grip Handle",
  ],
  specifications: {
    "Staple Use": " 23 Series,T-8. T-10",
    "Leg Length": ": 6-10mm",
    "used for ": "Textile,Canvas, Leather, Iron board, Upholstery",
  },
  relatedProducts: [
    {
      id: 'm21200',
      name: 'M21200 2-in-1',
      image: m21200,
      points: [
        "Staple Use: 23 Series, No. 80",
        "Leg Length :6-14 mm",
     ]
    },
    {
      id: 'm23250',
      name: 'M23250',
      image: m23250,
      points: [
        "Staple Use: 23 Series, T-8, T-10, T-13",
        "Leg Length : 6-13 mm",
      ]
    },
    {
      id: 'm23270',
      name: 'M23270',
      image: m23270,
      points: [
        "staple use :-23 Series, 18 Gauge (Brads & Pins)",
        "Leg length :- 6-13 mm(23 series), 12-14 mm(18 brades)",
        "1.1 kg"
      ]
    },
    {
      id: 'm23111',
      name: 'M23111',
      image: m23111,
      points: [
        "Staple Use: 24/6, 23 Series, T-8, T-10",
        "Leg Length: 6-10mm",
        "0.25 kg"
      ]
    },
     {
      id: 'ts-2313a',
      name: 'TS-2313A',
      image: ts2313a,
      points: [
        "Staple Use: 23 Series, 18 Gauge (Brads & Pins)",
        "Leg Length: 6-13mm (23 Seriet,12-14mm (Brads)",
      ]
    },
     {
      id: 'ts-2380a',
      name: 'TS-2380A',
      image: ts2380a,
      points: [
        "Staple Use: 23 Series,No. 80",
        "Leg Length: 6-13mm ",
      ]
    }
  ]
},
'm-pneumatic-tools': {
  name: ' PNEUMATIC TOOLS (MS 80-16L)',
  brand: 'miles',
  description: 'Compact & light weight tool ergonomic handle with rubber grip for extra working comfort. Multidirectional exhaust covel',
  image:ms80161,
  gallery: [
   
  ],
  features: [
    "Used for :- Frame , Furniture,Door Trims , Beading , Iron board, canvas",
  ],
  specifications: {
    "Staple use ": "No. 80",
    "Leg Length": "6-16 mm",
    "Working Pressure": "4-7 Bar",
    "Used for:": "Frame , Upholstery, Door Trims , Beading , Iron board, canvas",
  },
  relatedProducts: [
    {
      id: 'ms-10f-13',
      name: 'MS 10F-13',
      image:ms10f13,
      points: [
        "•Staple Use :- No. 10F",
        "Leg Length :- 6-13 mm",
        "Working PRessure :- 4-7 Bar"
      ]
    },
    {
      id: 'ms-80-16l',
      name: 'MS 80-16L',
      image: ms80161,
      points: [
        "Staple Use :- No. 80",
        "Leg Length : 4-7 Bar",
        "Working Pressure: 4-7 Bar"
      ]
    },
    {
      id: 'ms-71-16',
      name: 'MS 71-16',
      image: ms7116,
      points: [
         "Staple Use :- No. 80",
        "Leg Length : 6-16 mm",
        "Working Pressure: 4-7 Bar"
      ]
    },
    {
      id: 'ms-10j-13',
      name: 'MS 10J-13',
      image: ms10j13,
      points: [
        "Staple Use :- No. 10J",
        "Leg Length : 6-13 mm",
        "Working Pressure: 4-7 Bar"
      ]
    },
    {
      id: 'ms-18-32',
      name: 'MB 18-32',
      image: ms1832,
      points: [
        "Brad Use :- F Series(18 Gauge)",
        "Leg Length : 10-32 mm",
        "Working Pressure: 4-7 Bar"
      ]
    },
    //image not 
    {
      id: 'mb-18-50',
      name: 'MB 18-50',
      image: mb1850,
      points: [
        "Brad Use :- F Series(18 Gauge)",
        "Leg Length : 20-50 mm",
        "Working Pressure: 4-7 Bar"
      ]
    },
     {
      id: 'mb-16-64',
      name: 'MB 16-64',
      image: mb1664,
      points: [
        "Brad Use :- T Series(16 Gauge)",
        "Leg Length : 16-64 mm",
        "Working Pressure: 5-8 Bar"
      ]
    },
    {
      id: 'ms-622',
      name: 'MP 622',
      image: mp622,
      points: [
        "Pin Use :- 23 Gauge",
        "Leg Length : 12-22mm",
        "Working Pressure: 4-7 Bar"
      ]
    },
    //new_products
{
  id: 'ms-16wc-50',
  name: 'MS 16WC-50',
  image: ms16wc50,
  points: [
    "Staple Use: No.16WC",
    "Leg Length: 16-50mm",
    "Working Pressure: 5~8 bar",
    "Applications: Wooden Furniture, Wooden Pallets, Wooden Boxes"
  ]
},
{
  id: 'mcs-35-18-pro',
  name: 'MCS 35-18 Pro',
  image: mcs3518pro,
  points: [
    "Staple Use: 35 ",
    "Leg Length: 15-18mm",
    "Working Pressure: 5~7 bar",
    "Applications: Wooden Frames, Wooden Boxes, Furniture Assembly"
  ]
},
{
  id: 'mcs-35-22-pro',
  name: 'MCS 35-22 Pro',
  image:mcs3522pro,
  points: [
    "Staple Use: 35 Series",
    "Leg Length: 15-22mm",
    "Working Pressure: 5~7 bar",
    "Applications: Wooden Frames, Wooden Boxes, Furniture Assembly"
  ]
},
{
  id: 'mcn-57',
  name: 'MCN 57',
  image:mcn57,
  points: [
    "Coil Use: 15 wire weld",
    "Shank Dia: 2.1-2.3mm",
    "Nail Head: 5.0-5.7 bar",
    "Working Pressure : 5-7bar"
  ]
},
    {
      id: 'ms-16wc-50',
      name: 'MS 16WC-50',
      image: ms16wc50,
      points: [
        "Staple Use  :- No.16WC",
        "Leg Length : 16-50mm",
        "Working Pressure: 5-8 Bar"
      ]
    },
   
  ]
},
'fasteners': {
  name: 'FASTENERS',
  brand: 'miles',
  description: 'We offer the widest range of fasteners. All meets the exact international standards & specifications. No matter which stapler or tacker you use, we have the staples for you.',
  image: fasteners,
  gallery: [
    
  ],
  features: [
    "High tensile strength",
        "Corrosion resistant zinc coating",
        "Precisely machined hex head",
        "Uniform thread profile for secure fastening"
  ],
  specifications: {
    "standard": "IS 1364 / ISO 4017",
        "material": "Carbon Steel",
        "grade": "8.8",
        "coating": "Zinc Plated",
        "thread_type": "Full Thread",
        "diameter_mm": 10,
        "length_mm": 50,
        "thread_pitch_mm": 1.5,
        "tensile_strength_mpa": 800,
        "hardness_hrc": "23–34",
        "temperature_resistance_c": 400
  },
},
'stitch-wire': {
  name: 'STITCHING WIRES ',
  brand: 'miles',
  description: 'Our stitching wires are primarily used for corrugation industry, These are tailored to meet the exact requirement of the customers not only in terms of cost and availability but with the assurance of consistent quality.',
  image: stichwire,
  gallery: [
   
  ],
  features: [
    "Layer winding of stitching wire for automatic machines for better performance",
    "Uniform mechanical properties across length ensuring optimal performance of stitching heads",
    "Avoid premature wear out of machine",
    "Energy saver & less maintenance cost",
    "5The wire is more evenly wound on the coil to provide continues operation during production"
  ],
  specifications: {
   "Sizes available for Commercial / Rust Resistance Grade": "12/25, 13/25, 14/25, 17/25, 12/22, 14/22 & 15/22", "Sizes available for Stainless Steel Grade": "13/25 & 14/25", "Weight of Coil": "2.50 Kg., 15 Kg. (Spool) & 40 Kg. approx", "Packaging": "Corrugated Box - Laminated from inner side"

  }
},
    //CRC INDUSTRIES
'cleaner': {
  name: 'CLEANER',
  brand: 'CRC Industries',
  description: 'CRC Dust Free Cleaner is a powerful, non-flammable cleaning solution that removes microscopic dust and debris with a strong dry jet, preventing short circuits and damage in sensitive electronic and optical equipment.',
  image: crc_dust_free,
  gallery: [
    crc_gas_duster,
    crc_contact_cleaner,
    crc_contact_cleaner_plus,
  ],
  features: [
    "Powerful Dry Jet → Effectively removes dust and fine particles from delicate components.",
    "Safe for Electronics → Non-conductive and non-flammable formula prevents short circuits.",
    "Residue-Free Cleaning → Leaves no residue on sensitive surfaces.",
    "Precision Application → Ideal for sensors, PLCs, optical instruments, and data equipment."
  ],
  specifications: {
    "Application": "Designed for cleaning electronic devices, sensors, PLCs, data processing equipment, servo-mechanisms, and optical instruments.",
    "Options": "Available in different sizes for industrial and laboratory use.",
    "Formula": "Liquefied gas blend providing powerful dry jet cleaning.",
    "Safety": "Non-conductive, non-flammable, and leaves no residue.",
    "Mobility": "Portable can design, easy to carry and use at various locations."
  },
       relatedProducts: [
    {
      id: 'crc-dust-free-fps',
      name: 'CRC DUST FREE (FPS)',
      image: crc_dust_free,
      points: [
        "Ref.  || SIZE",
        "20108 || Aerosol 400 ml"
      ]
    },
    {
      id: 'crc-gas-duster',
      name: 'CRC GAS DUSTER',
      image: crc_gas_duster,
      points: [
        "Ref.  || SIZE",
        "32402 || Aerosol 250 ml"
      ]
    },  
    {
      id: 'crc-contact-cleaner',
      name: 'CRC CONTACT CLEANER',
      image: crc_contact_cleaner,
      points: [
        "Ref.  || SIZE",
        "12101 || Aerosol 500 ml"
      ]
    },
    {
      id: 'crc-contact-cleaner-plus',
      name: 'CRC CONTACT CLEANER PLUS',
      image: crc_contact_cleaner_plus,
      points: [
        "Ref.  || SIZE",
        "32180 || Aerosol 500 ml"
      ]
    },
    {
      id: 'crc-qd-contact-cleaner',
      name: 'CRC QD-CONTACT CLEANER',
      image: qd_contact_cleaner,
      points: [
        "Ref.          ||  SIZE",
        "30485 Aerosol ||  300 ml",
        "32429 Aerosol ||  500 ml"
      ]
    },
    {
      id: 'crc-nf-precision-cleaner',
      name: 'CRC NF-PRECISION CLEANER',
      image: crc_nf_precision_cleaner,
      points: [
        "Ref.          ||  SIZE",
        "30490 Aerosol ||  300 ml"
      ]
    },

  ]
    },
'cleaner-heavy-duty': {
  name: 'CLEANER HEAVY DUTY',
  brand: 'CRC Industries',
  description: 'CRC Heavy Duty Cleaner is formulated for industrial environments, delivering powerful cleaning action to remove grease, oil, dust, and stubborn contaminants from machinery, equipment, and large surfaces.',
  image: crc_fast_dry_degreaser,
  gallery: [
    crc_industrial_degreaser,
    crc_graffiti_remover,
 crc_label_off_super
  ],
  features: [
    "Heavy-Duty Cleaning Power → Effectively removes grease, oil, and stubborn dirt.",
    "Industrial Strength Formula → Suitable for machinery, tools, and workshop equipment.",
    "Residue-Free Finish → Cleans without leaving harmful deposits."
  ],
  specifications: {
    "Application": "Designed for factories, warehouses, workshops, and construction sites.",
    "Cleaning Capability": "Removes heavy grease, oil, adhesives, tar, and industrial contaminants.",
    "Formula": "Fast-acting, heavy-duty cleaner for industrial use.",
    "Safety": "Non-corrosive on metals and safe for most industrial equipment.",
    "Packaging Options": "Available in aerosol cans, bulk containers, and spray bottles."
  },
       relatedProducts: [
    {
      id: 'crc-fast-dry-degreaser',
      name: 'CRC FAST DRY DEGREASER',
      image: crc_fast_dry_degreaser,
      points: [
         "Ref.  - SIZE",
         "10227 - Aerosol 500 ml",
         "10230 - Bulk 5L",
         "10233 - Bulk 20L",
         "31927 - Bulk 200L"
      ]
    },
    {
      id: 'crc-industrial-degreaser',
      name: 'CRC INDUSTRIAL DEGREASER',
      image: crc_industrial_degreaser,
      points: [
         "Ref.  - SIZE",
         "10321 - Aerosol 500 ml",
         "10325 - Bulk 5L",
         "10326 - Bulk 20L",
         "30452 - Bulk 200L"
      ]
    },
    {
      id: 'crc-graffiti-remover',
      name: 'CRC GRAFFITI REMOVER',
      image: crc_graffiti_remover,
      points: [
         "Ref.  - SIZE",
         "20717 - Aerosol 400 ml"
      ]
    }, 
     {
      id: 'crc-label-off-super',
      name: 'CRC LABEL OFF SUPER',
      image: crc_label_off_super,
      points: [
         "Ref.  - SIZE",
         "32370 - Bulk 5L",
      ]
    },
     {
      id: 'crc-label-off-super',
      name: 'CRC LABEL OFF SUPER',
      image: crc_label_off_super,
      points: [
         "Ref.  - SIZE",
         "20136 - Aerosol 200 ml",
         "32314 - Aerosol 400 ml"
      ]
    },
     {
      id: 'crc-inox-weld-kleen',
      name: 'CRC INOX WELD KLEEN',
      image: crc_inox_weld_kleen,
      points: [
         "Ref.  - SIZE",
         "30379 - Bulk 2 Kg"
      ]
    },
     {
      id: 'crc-eco-cold-cleaner',
      name: 'CRC ECO COLD CLEANER',
      image: crc_eco_cold_cleaner,
      points: [
         "Ref.  - SIZE",
         "31908 - Aerosol 500 ml",
         "31914 - Bulk 5L"
      ]
    }, 
  ]
    },
    'cleaner-water-based': {
  name: 'CLEANER WATER BASED',
  brand: 'CRC Industries',
  description: "CRC Water Based Cleaner is an eco-friendly industrial solution formulated to safely and effectively remove grease, oil, and dirt from machinery, tools, and components. With water as the main solvent, it is non-flammable, safe for operators, and ideal for industries like automotive, aerospace, electronics, and general manufacturing.",
  image: inox_clean,
  gallery: [
    
  ],
  features: [
    "Eco-Friendly Formula → Water-based and biodegradable solution, safe for the environment.",
    "Non-Flammable & Safe → Ensures operator safety in industrial environments.",
    "Versatile Cleaning → Effectively removes grease, oil, and heavy industrial dirt.",
    "Corrosion Protection → Leaves behind rust inhibitors for metal surfaces."
  ],
  specifications: {
    "Compatibility": "Can be used with spray washers, immersion tanks, and ultrasonic cleaning systems.",
    "Cleaning Capability": "Removes oils, coolants, dust, adhesives, and process residues effectively.",
    "Corrosion Protection": "Contains rust inhibitors to protect cleaned metal surfaces.",
    "Concentration": "Available in both ready-to-use and concentrated formulations.",
    "Operation": "Suitable for continuous cleaning or batch processes across multiple industries."
  },
       relatedProducts: [
    {
      id: 'crc-inox-kleen',
      name: 'CRC INOX KLEEN ',
      image: inox_clean,
      points: [
         "Ref.  - SIZE",
         "20720 - Aerosol 500 ml"
      ]
    },
    {
      id: 'crc-eco-foam-cleaner',
      name: 'CRC ECO FOAM CLEANER',
      image: eco_foam_cleaner,
      points: [
         "Ref.  - SIZE",
         "10278 - Aerosol 500 ml"
      ]
    },
    {
      id: 'crc-eco-complex-blue',
      name: 'CRC ECO COMPLEX BLUE',
      image: eco_complex_blue,
      points: [
         "Ref.  - SIZE",
         "20717 - Aerosol 400 ml"
      ]
    }, 
    {
      id: 'crc-eco-scale-remover',
      name: 'ECO SCALE REMOVER',
      image: crc_scale_remover,
      points: [
         "Ref.  - SIZE",
         "20717 - Aerosol 400 ml"
      ]
    }, 
  
  ]
    },
    'hand-cleaner': {
  name: 'HAND CLEANER',
  brand: 'CRC Industries',
  description: "CRC Hand Cleaner is a skin-friendly, waterless cleaning solution designed to remove grease, paint, adhesives, and industrial dirt from hands. Enriched with lanolin and biodegradable ingredients, it ensures effective cleaning while keeping skin soft and protected.",
  image: main_hand,
  gallery: [
    
  ],
  features: [
    "Waterless Cleaning → Can be used without water for quick and easy hand cleaning.",
    "Gentle on Skin → Contains lanolin and moisturizers to prevent dryness or irritation.",
  ],
  specifications: {
    "Application": "Ideal for workers in automotive, mechanical, construction, and industrial sectors.",
    "Skin Safety": "Non-irritant, enriched with skin moisturizers for safe daily use.",
    "Cleaning Capability": "Removes stubborn grease, oil, paint, adhesives, and industrial grime.",
    "Usage": "Quick and effective hand cleaning without the need for water."
  },
       relatedProducts: [
    {
      id: 'crc-super-hand-cleaner',
      name: 'CRC SUPER HAND CLEANER  ',
      image: main_hand,
      points: [
         "Ref.  - SIZE",
         "30675 - Tube 150 ml",
         "30676 - Bulk 2,5L"

      ]
    },
    {
      id: 'crc-citrus-handcleaner',
      name: 'CRC CITRUS HANDCLEANER ',
      image: citrus_handcleaner,
      points: [
         "Ref.  - SIZE",
         "10278 - Aerosol 500 ml"
      ]
    },
    {
      id: 'crc-hand-wipes',
      name: 'CRC HAND WIPES',
      image: hand_wipes,
      points: [
         "Ref.  - SIZE",
         "12006 - Bucket: 100 wipes"
      ]
    }, 
    {
      id: 'crc-wipes',
      name: 'CRC WIPES',
      image: crc_wipes,
      points: [
         "Ref.  - SIZE",
         "20246 - Tub: 50 wipes"
      ]
    }, 
  
  ]
    },
    'lubricant-cutting-fluid': {
  name: 'LUBRICANTS - CUTTING FLUID',
  brand: 'CRC Industries',
  description: "CRC Cutting Fluids are high-performance lubricants formulated to reduce friction, heat, and tool wear during machining operations. They improve cutting efficiency, extend tool life, and deliver superior surface finish. Available in water-soluble, semi-synthetic, synthetic, and straight oil formulations to suit diverse machining requirements.",
  image: crc_supercut,
  gallery: [
   
  ],
  features: [
    "Superior Cooling & Lubrication → Reduces heat and friction during machining.",
    "Extended Tool Life → Minimizes tool wear for cost-effective performance.",
    "Versatile Formulations → Available in water-soluble, semi-synthetic, synthetic, and straight oils."
  ],
  specifications: {
    "Application": "Suitable for turning, milling, drilling, grinding, tapping, and other machining processes.",
    "Lubrication": "Provides boundary lubrication to reduce friction between tool and workpiece.",
    "Cooling": "Efficient heat dissipation prevents tool overheating and material damage.",
    "Corrosion Protection": "Formulated with inhibitors to prevent rust and corrosion on machines and parts.",
  },
       relatedProducts: [
    {
      id: 'crc-supercut',
      name: 'CRC SUPERCUT',
      image: crc_supercut,
      points: [
         "Ref.  - SIZE",
         "32210 - Aerosol 400 ml",
         "30353 - Bulk 1L",
         "20457 - Bulk 5L",
         "30354 - Bulk 20L"

      ]
    },
    {
      id: 'crc-citrus-handcleaner',
      name: 'CRC ECO SUPERCUT',
      image: eco_supercut,
      points: [
         "Ref.  - SIZE",
         "31911 - Aerosol 500 ml",
         "31917 - Bulk 5L"
      ]
    }, 
    {
      id: 'crc-wipes',
      name: 'CRC SUPER TAPPING COMPOUND',
      image: crc_super_tapping,
      points: [
         "Ref.  - SIZE",
         "20246 - Tub: 50 wipes"
      ]
    },
    {
      id: 'crc-lub-21',
      name: 'CRC LUB 21',
      image: crc_lub_21,
      points: [
         "Ref.  - SIZE",
         "20248 - Bulk 5L",
         "30405 - Bulk 25L",
         "30404 - Bulk 200L"
      ]
    }, 
  
  ]
    },
    'lubricant-oils': {
      name: 'LUBRICANT OILS',
      brand: 'crc_industries',
    description: "Lubricant oils are specially formulated to reduce friction, heat generation, and wear in machinery and equipment. They improve operational efficiency, extend equipment life, and enhance performance while providing cooling and lubrication. Lubricant oils are available in different viscosities and formulations, depending on the application and equipment requirements.",
      image: crc_silicon,
      gallery: [
        lo_1_image,
        lo_2_image,
        lo_3_image,
      ],
      features: [
             "Reduces friction and wear between moving parts",
             "Provides cooling by dissipating generated heat",
             "Protects against corrosion, rust, and oxidation",
      ],
      specifications: {
           "Application": "Designed for engines, gear systems, hydraulic systems, compressors, and industrial machinery",
           "Lubrication": "Forms a protective film to minimize wear and extend component life",
           "Performance": "Maintains viscosity under varying temperature and load conditions",
           "Formulations": "Available as mineral, synthetic, and semi-synthetic oils",
           "Protection": "Provides anti-rust, anti-oxidation, and anti-foaming properties",
           "Thermal Stability": "Withstands high operating temperatures without breakdown",

      },
       relatedProducts: [
    {
      id: 'crc-silicon-fps',
      name: 'CRC SILICON(FPS)',
      image: crc_silicon,
      points: [
         "Ref.  - SIZE",
         "10526 - Aerosol 400 ml",
         "30053 - Bulk 5L"
      ]
    },
    {
      id: 'crc-multi-oil',
      name: 'CRC MULTI OIL',
      image: crc_multi_oil,
      points: [
         "Ref.  - SIZE",
         "10258 - Aerosol 400 ml",
         "20157 - Bulk 5L"
      ]
    }, 
    {
      id: 'crc-chain-lube',
      name: 'CRC CHAIN LUBE',
      image: crc_chain_lube,
      points: [
         "Ref.  - SIZE",
         "10267 - Aerosol 400 ml",
         "30033 - Bulk 5L"
      ]
    },
    {
      id: 'crc-dry-lube',
      name: 'CRC DRY LUBE',
      image: crc_dry_lube,
      points: [
         "Ref.  - SIZE",
         "30519 - Aerosol 400 ml"
      ]
    }, 
  
  ]
    },
   'lubricant-grease': {
      name: 'LUBRICANT GREASE',
      brand: 'crc_industries',
    description: "Lubricant greases are designed to provide long-lasting lubrication and protection for various mechanical components. They are formulated to adhere to surfaces, resist water washout, and withstand high temperatures and pressures.",
      image: crc_high_speed_grease,
      gallery: [
      
      ],
      features: [
             "Reduces friction and wear for smooth machine operation.",
    "Provides long-lasting lubrication and protection.",
    "Effective corrosion and rust resistance for extended equipment life.",
    "Wide compatibility with various industrial applications."
      ],
      specifications: {
    "Application": "Used in gearboxes, bearings, compressors, and hydraulic systems.",
    "Viscosity Range": "Available in multiple viscosity grades for different machinery needs.",
    "Lubrication": "Ensures continuous lubrication under high-load and high-temperature conditions.",
    "Corrosion Protection": "Formulated with anti-oxidants and anti-rust additives.",
    "Thermal Stability": "Maintains performance under extreme operating temperatures."

      },
       relatedProducts: [
    {
      id: 'crc-high-speed-grease',
      name: 'CRC HIGH SPEED GREASE',
      image: crc_high_speed_grease,
      points: [
         "Ref.  - SIZE",
         "32142 - Aerosol 500 ml"

      ]
    },
    {
      id: 'crc-multi-oil',
      name: 'CRC SILICON GREASE',
      image: crc_silicon_grease,
      points: [
         "Ref.  - SIZE",
         "30724 - Aerosol 400 ml"
      ]
    }, 
    {
      id: 'crc-multi-grease',
      name: 'CRC MULTI GREASE',
      image: crc_multi_grease,
      points: [
         "Ref.  - SIZE",
         "30566 - Tube 100 ml",
         "30567 - Cartridge 400 g",
         "30568 - Bulk 1 kg",
         "30569 - Bulk 5 kg"
      ]
    },
    {
      id: 'crc-food-grease',
      name: 'CRC FOOD GREASE',
      image: crc_food_grease,
      points: [
         "Ref.  - SIZE",
         "20210 - Aerosol 400 ml",
         "20158 - Cartridge 400 g",
         "10291 - Bulk 1 kg",
         "30438 - Bulk 20 kg"
      ]
    },
    {
      id: 'crc-ep-food-grease',
      name: 'CRC EP FOOD GREASE',
      image: crc_ep_food_grease,
      points: [
         "Ref.  - SIZE",
         "20121 - Cartridge 400 g"
      ]
    }, 
    {
      id: 'crc-high-temp-grease',
      name: 'CRC HIGH TEMP GREASE',
      image: crc_high_temp_grease,
      points: [
         "Ref.  - SIZE",
         "30570 - Tube 100 ml",
         "30572 - Cartridge 400 g",
         "30573 - Bulk 1 kg",
         "30574 - Bulk 5 kg"
      ]
    },
  
  ]
    },
    'lubricant-paste': {
      name: 'LUBRICANT PASTE',
      brand: 'crc_industries',
    description: "Lubricant pastes are designed to provide long-lasting lubrication and protection for various mechanical components. They are formulated to adhere to surfaces, resist water washout, and withstand high temperatures and pressures.",
      image: crc_copper_paste,
      gallery: [
        
      ],
      features: [
            "Prevents wear, scuffing, and seizure in extreme conditions",
            "Withstands very high and very low temperature ranges",
            "Resistant to water, chemicals, and corrosion",
      ],
      specifications: {
           "Application": "Ideal for assembly, press-fitting, running-in, and protection of machine parts",
           "Load Capacity": "Formulated to handle extreme pressure and high static or dynamic loads",
           "Temperature Resistance": "Performs reliably across very wide temperature ranges",
           "Solid Lubricants": "Contains MoS2, graphite, or other solids for boundary lubrication",
           "Corrosion Protection": "Prevents rust and oxidation on treated surfaces",

      },
       relatedProducts: [
    {
      id: 'crc-copper-paste',
      name: 'CRC COPPER PASTE',
      image: crc_copper_paste,
      points: [
         "Ref.  - SIZE",
         "10693 - Aerosol 300 ml",
         "32340 - Aerosol 500 ml",
         "10690 - Tube 100 ml",
         "10699 - Bulk 500 gr"

      ]
    },
    {
      id: 'crc-metal-free-paste',
      name: 'CRC METAL FREE PASTE',
      image: crc_metal_free_paste,
      points: [
         "Ref.  - SIZE",
         "10723 - Aerosol 300 ml",
         "10720 - Tube 100 gr",
         "20706 - Bulk 1 kg"
      ]
    }, 
    {
      id: 'crc-assembly-paste',
      name: 'CRC ASSEMBLY PASTE',
      image: crc_assembly_paste,
      points: [
         "Ref.  - SIZE",
         "20109 - Aerosol 400 ml",
         "20120 - Tin 500 g"
      ]
    },
    {
      id: 'crc-food-grease',
      name: 'CRC ALU PASTE',
      image: crc_alu_paste,
      points: [
         "Ref.  - SIZE",
         "32147 - Aerosol 500 ml"
      ]
    },
  ]
    },
    'anti-corrosion': {
      name: 'ANTI CORROSION ',
      brand: 'crc_industries',
    description: "Anti-Corrosion products are protective lubricants or coatings formulated to prevent rust, oxidation, and surface degradation caused by moisture, chemicals, or environmental exposure. They create a protective barrier on metal surfaces, extending equipment life and ensuring reliable performance even in harsh conditions.",
      image: ac_main,
      gallery: [
        ac_1,
        ac_2,
        ac_3,
      ],
      features: [
            "Easy application by spraying, brushing, or dipping",
            "Non-sticky or dry-to-touch finishes available",
            "Compatible with a wide range of metals and alloys",
      ],
      specifications: {
           "Moisture Resistance": "Repels water and prevents condensation-related corrosion",
           "Chemical Resistance": "Withstands exposure to salts, acids, and industrial environments",
           "Temperature Stability": "Performs reliably across varying climate conditions",
           "Removal": "Easily cleaned off before use without damaging surfaces",

      },
       relatedProducts: [
    {
      id: 'crc-3-36',
      name: 'CRC 3-36',
      image: crc_3_36,
      points: [
         "Ref.  - SIZE",
         "10106 - Aerosol 300 ml",
         "10110 - Aerosol 500 ml",
         "10114 - Bulk 5L",
         "30362 - Bulk 20L",
         "30364 - Bulk 200L"

      ]
    },
    {
      id: 'crc-sp-350',
      name: 'CRC SP 350',
      image: crc_sp_350,
      points: [
         "Ref.  - SIZE",
         "30406 - Aerosol 300 ml",
         "20294 - Bulk 5L",
         "30407 - Bulk 20L"
      ]
    }, 
    {
      id: 'crc-sp-400',
      name: 'CRC SP 400',
      image: crc_sp_400,
      points: [
         "Ref.  - SIZE",
         "30400 - Aerosol 300 ml",
         "32350 - Aerosol 500 ml",
         "20324 - Bulk 5L",
         "20327 - Bulk 20L",
         "30402 - Bulk 200L"
      ]
    },
    {
      id: 'crc-zinc',
      name: 'CRC ZINC',
      image: crc_zinc,
      points: [
         "Ref.  - SIZE",
         "30563 - Aerosol 500 ml",
         "30564 - Bulk 750 ml"
      ]
    },
  ]
    },
   

    //MAKITA PRODUCTS STARTED FROM HERE 
   'cordless-driver-drill': {
  name: 'CORDLESS DRIVER DRILL',
  brand: 'Makita',
  description: 'Makita Cordless Driver Drill is engineered for professional drilling and fastening applications, delivering powerful torque, precision control, and cordless convenience for maximum productivity on job sites.',
  image: main_drill,
  gallery: [
    makita_drill_1,
    makita_drill_2,
    makita_drill_3
  ],
  features: [
    "Powerful Motor → Delivers high torque for tough applications.",
    "Ergonomic Design → Comfortable grip reduces operator fatigue.",
    "Cordless Operation → Provides mobility and ease of use.",
    "Variable Speed & Torque → Ensures precision across different materials."
  ],
  specifications: {
    "Steel / Wood ": "13 / 38 mm (1/2 / 1-1/2)",
    "Hard / Soft ": "54 / 30 N·m (480 / 270 in.lbs).",
    "Drilling into Metal": "2.5 m/s² or less",
    "Speed Control": "Variable speed trigger for accurate drilling and fastening.",
    "Chuck Type": "Keyless chuck for quick and easy bit changes."
  },
       relatedProducts: [
    {
      id: 'cordless-driver-drill-ddf484',
      name: 'Cordless Driver Drill - DDF484',
      image: ddf484,
      points: [
         "1.5 – 13 mm (1/16 – 1/2″)",
         "Steel / Wood: 13 / 38 mm (1/2″ / 1-1/2″)",
         "60 N·m (530 in.lbs.)",
         "Sound Pressure Level : 76 dB(A)"
      ]
    },
    {
      id: 'cordless-driver-drill-ddf485',
      name: 'Cordless Driver Drill - DDF485',
      image: ddf485,
      points: [
         "Drilling into Metal: 1.5 m/s²",
         "Max lock torque :60 N·m (530 in.lbs.)",
         "Sound Power Level :N/A dB(A)",
         "Noise K Factor :3 dB(A)"
      ]
    }, 
    {
      id: 'cordless-driver-drill-ddf486',
      name: 'Cordless Driver Drill - DDF486',
      image: ddf486,
      points: [
         "Max lock torque :125 N·m (1100 in.lbs.)",
         "Sound Pressure Level :74 dB(A)",
         "Sound Power Level :N/A dB(A)",
         "Noise K Factor :3 dB(A)"
      ]
    }, 
    {
      id: 'cordless-driver-drill-ddf487',
      name: 'Cordless Driver Drill - DDF487',
      image: ddf487,
      points: [
         "Max lock torque :40 N·m (350 in.lbs.)",
         "Sound Pressure Level :73 dB(A)",
         "Noise K Factor :3 dB(A) ",
         "Wood (Self-Feed Bit): 35 mm (1-3/8″)"
      ]
    },
  
  ]
    },
    'cordless-cutter': {
  name: 'CORDLESS CUTTER',
  brand: 'Makita',
  description: 'Makita Cordless Cutter is built for high-performance cutting tasks, offering fast, accurate, and effortless operation with the convenience of cordless technology.',
  image: main_cutter,
  gallery: [
    cutter_1,
    cutter_2,
    cutter_3
  ],
  features: [
    "The tool has an electric brake that engine power cutters do not have.",
    "Water supply kit can be connected",
    "High water-resistance compatible with XPT",
    "High water-resistance compatible with XPT",
  ],
  specifications: {
  "Wheel Diameter (MM)": "305 (12\")",
  "Max Cutting Capacity (MM)": "121 (4-3/4\")",
  "No Load Speed (RPM)": "5000",
  "Vibration Level (Left / Right) (M/S²)": "3.8 / 2.3",
  "Vibration K Factor (Left / Right)": "1.5 / 1.5",
  "Sound Pressure Level (dB(A))": "99",
  "Sound Power Level (dB(A))": "110",
  "Noise K Factor (dB(A))": "3",
  "Dimensions (L x W x H) (MM)": "663 x 240 x 406 (26-1/8 x 9-1/2 x 16\")",
  "Net Weight (KG)": "6.7 – 7.7 (14.8 – 17.0 lbs.)",
  "Net Weight (Battery)": "BL4040F – BL4080F",
  "Net Weight (Attachment)": "w/o Blade"
},
    relatedProducts: [
    {
      id: 'cordless-cutter',
      name: 'Cordless Steel Rod Cutter - DSC191',
      image: dsc191,
      points: [
        "Cutting Speed (sec) :6.5",
         "Sound Pressure Level :80.5 dB(A)",
         "Noise K Factor :3 dB(A)",
         "Net weight :11.1 – 11.2 kg (24.5 – 24.6 lbs.)"
      ]
    },
    {
      id: 'cordless-cutter',
      name: 'Cordless Threaded Rod Cutter - DSC102',
      image: dsc102,
      points: [
         "Min. Cutting Length :20 mm (13/16″)",
         "Sound Pressure Level :71 dB(A)",
         "Noise K Factor :3 dB(A)",
         "Net weight :2.8 – 3.2 kg (6.2 – 7.0 lbs.)"
      ]
    }, 
    {
      id: 'cordless-cutter',
      name: 'Cordless Metal Cutter - DCS553',
      image: dsc553,
     points: [
    "Max Cutting Capacity : 0°: 67 mm (2-5/8″)",
    "No Load Speed (RPM) : 3,500",
    "Vibration Level : Cutting Metal: 2.5 m/s² or less",
    "Vibration K Factor : Cutting Metal: 1.5 m/s²",
    "Sound Pressure Level : 102 dB(A)",
    "Sound Power Level : 113 dB(A)",
    "Noise K Factor : 3 dB(A)"
]
    }, 
    {
      id: 'cordless-cutter',
      name: 'Cordless Steel Rod Cutter - DSC251',
      image: dsc251,
      points: [
        "Min. Cutting Length :20 mm (13/16″)",
         "Sound Pressure Level :TBA dB(A)",
         "Noise K Factor :TBA dB(A)",
         "Net weight :2.7 – 2.8 kg (6.0 – 6.2 lbs.)"
      ]
    },
    
  ]
    },
   'cordless-wrench': {
  name: 'CORDLESS WRENCH',
  brand: 'Makita',
  description: 'Makita Cordless Wrench is designed for heavy-duty fastening and loosening applications, delivering powerful torque, efficient performance, and the freedom of cordless mobility.',
  image: main_wrench,
  gallery: [
    wrench_1,
    wrench_2,
    wrench_3
  ],
  features: [
    "High Torque Output → Ideal for tightening and loosening stubborn bolts and nuts.",
    "Brushless Motor Technology → Increases efficiency and extends tool life.",
    "Variable Speed Trigger → Provides precision control for different applications.",
    "Compact & Ergonomic Design → Easy to handle in confined spaces."
  ],
  specifications: {
    "Anvil type" : "Long",
    "Anvil length (Exposure length) ": "163 mm (6-3/8″)",
    "Shank/Drive" : "Square Drive 25.4 mm (1″)",
    "Square drive" : "25.4 mm (1″)",
    "Max fastening torque" : "3,150 N·m (2,323 ft.lbs.)",
    "Max fastening torque (Other conditions)" : "The value at 6 seconds after seating when tightening M36 friction grip bolt",
    "Nut-busting torque" : "4,000 N·m (2,950 ft.lbs.)",
    "Impact power selection" : "4 stages + 3 each step of F/R auto-stop function",
    "Loosening time" : "2.9 sec"
  },
       relatedProducts: [
    {
      id: 'cordless-wrenches',
      name: 'Cordless Angle Impact Driver - TL064D',
      image: tl064d,
      points: [
        "Hex Shank :6.35 mm (1/4″)",
        "Sound Pressure Level :91 dB(A)",
        "Sound Power Level :102 dB(A) ",
         "Net weight : 1.2 – 1.6 kg (2.7 – 3.6 lbs.)"
      ]
    },
    {
      id: 'cordless-wrenches',
      name: 'Cordless Angle Impact Wrench - TL065D',
      image: tl065d,
      points: [
         "No Load Speed (RPM):0 – 2,000",
         "Sound Power Level :101 dB(A)",
         "Noise K Factor :3 dB(A)",
         "Net weight :1.2 – 1.6 kg (2.7 – 3.6 lbs.)"
      ]
    }, 
    {
      id: 'cordless-wrenches',
      name: 'Cordless Impact Wrench - TW160D',
      image: tw160d,
      points: [
         "Square Drive:9.5 mm (3/8″)",
"Nut-busting torque :290 N·m (210 ft.lbs.)",
         "Sound Pressure Level :90 dB(A)",
         "Net weight : 1.0 – 1.2 kg (2.2 – 2.6 lbs.)"
      ]
    }, 
    {
      id: 'cordless-wrenches',
      name: 'Cordless Impact Wrench - TW161D',
      image: tw161d,
      points: [
         "Max Fastening Torque:165 N·m (122 ft.lbs.)",
         "Max Output :170 W",
         "Sound Pressure Level :93 dB(A)",
         "Net weight :1.1 – 1.2 kg (2.4 – 2.7 lbs.)"
      ]
    },
   
  ]
    },
    'cordless-grinder': {
  name: 'CORDLESS GRINDER',
  brand: 'Makita',
  description: 'Makita Cordless Grinder is built for cutting, grinding, and polishing applications, offering high speed, durability, and the flexibility of cordless operation for professional use.',
  image: main_grinder,
  gallery: [
    grinder_1,
    grinder_2,
    grinder_3
  ],
  features: [
    "3-Stage LED gauge indicates battery charge level / overheating / overload.",
    "Soft start suppresses start-up reaction for smooth start-ups and longer gear life.",
    "Spiral bevel gears for smoother rotations and a more efficient transfer of energy.",
    "Wire mesh intake covers are engineered to minimize debris from entering motor."
  ],
 specifications: {
  "Wheel Diameter (MM)": "100 (4\")",
  "No Load Speed (RPM)": "8500",
  "Abrasive Cut-Off Wheel Diameter (MM)": "100 (4\")",
  "Abrasive Grinding Wheel Diameter (MM)": "100 (4\")",
  "Diamond Wheel Diameter (MM)": "105 (4\")",
  "Cup Brush Diameter Capacity (MM)": "75 (3\")",
  "Cup Diamond Wheel Usable": "YES",
  "Disc Paper Diameter (MM)": "100 (4\")",
  "Max Abrasive Wheel Thickness (MM)": "6.4 (1/4\")",
  "Hole Diameter (MM)": "16 (5/8\")",
  "Rubber Pad Diameter (MM)": "76 (3\")",
  "Thread": "M10x1.5",
  "Vibration Level (Disc Sanding) (M/S²)": "2.5 or less",
  "Vibration Level (Surface Grinding w/ Anti-Vibration Side Grip) (M/S²)": "4",
  "Vibration Level (Surface Grinding w/ Normal Side Grip) (M/S²)": "4.5",
  "Vibration K Factor (Disc Sanding) (M/S²)": "1.5",
  "Vibration K Factor (Surface Grinding w/ Anti-Vibration Side Grip) (M/S²)": "1.5",
  "Vibration K Factor (Surface Grinding w/ Normal Side Grip) (M/S²)": "1.5",
  "Sound Pressure Level (dB(A))": "80",
  "Sound Power Level (dB(A))": "91",
  "Noise K Factor (dB(A))": "3",
  "Dimensions (L x W x H) (MM)": "362 x 117 x 140 (14-1/4 x 4-5/8 x 5-1/2\")",
  "Net Weight (KG)": "2.1 – 2.71 (4.63 – 5.98 lbs.)"
},
       relatedProducts: [
    {
      id: 'cordless-grinder',
      name: 'Cordless Angle Grinder - GA037G',
      image: ga037g,
      points: [
    "Wheel Diameter : 180 mm (7″)",
    "Hole Diameter : 22.23 mm (7/8″)",
    "Max Wheel Thickness : North America: 6.5 mm (1/4″); Others: 7.2 mm (1/4″)",
    "No Load Speed (RPM) : 7,800",
    "Vibration Level : Surface Grinding w/ Anti-Vibration Side Grip: 7.5 m/s²",
    "Sound Pressure Level : 88 dB(A)",
    "Sound Power Level : 99 dB(A)"
]
    },
    {
      id: 'cordless-grinder',
      name: 'Cordless Angle Grinder - GA038G',
      image: ga038g,
     points: [
    "Wheel Diameter : 230 mm (9″)",
    "Hole Diameter : 22.23 mm (7/8″)",
    "Max Wheel Thickness : 6.5 mm (1/4″)",
    "No Load Speed (RPM) : 6,600",
    "Vibration Level : Surface Grinding w/ Anti-Vibration Side Grip: 7.5 m/s²",
    "Sound Pressure Level : 88 dB(A)",
    "Sound Power Level : 99 dB(A)"
]
    }, 
    {
      id: 'cordless-grinder',
      name: 'Cordless Angle Grinder - GA035G',
      image: ga035g,
     points: [
    "Wheel Diameter : 150 mm (6″)",
    "Hole Diameter : 22.23 mm (7/8″)",
    "Max Wheel Thickness : 6.4 mm (1/4″)",
    "No Load Speed (RPM) : 8,500",
    "Vibration Level : Surface Grinding w/ Normal Side Grip: 7.0 m/s²",
    "Sound Pressure Level : 82 dB(A)",
    "Sound Power Level : 93 dB(A)"
]
    }, 
    {
      id: 'cordless-wrenches',
      name: 'Cordless Angle Grinder - GA036G',
      image: ga036g,
     points: [
    "Wheel Diameter : 150 mm (6″)",
    "Hole Diameter : 22.23 mm (7/8″)",
    "Max Wheel Thickness : 6.4 mm (1/4″)",
    "No Load Speed (RPM) : 8,500",
    "Vibration Level : Surface Grinding w/ Normal Side Grip: 9.0 m/s²",
    "Sound Pressure Level : 82 dB(A)",
    "Sound Power Level : 93 dB(A)"
]
    },    
  ]
    },
    'cordless-jacket': {
  name: 'CORDLESS JACKET',
  brand: 'Makita',
  description: 'Makita Cordless Heated Jacket is designed to provide warmth and comfort in cold working environments, powered by a rechargeable battery for long-lasting performance.',
  image: main_jacket,
  gallery: [
    jacket_1,
    jacket_2,
    jacket_3
  ],
  features: [
    "Heated Design → Keeps the body warm in cold weather conditions.",
    "Multiple Heat Settings → Adjustable levels for personalized comfort.",
    "Cordless Battery Power → Ensures long-lasting outdoor performance.",
    "Durable & Lightweight Material → Comfortable to wear during work."
  ],
  specifications: {
  "Run Time (Hours)": "w/ BL1860B Low / Med / High: 33 / 24.5 / 13.5",
  "Air Flow Settings": "Turbo / High / Medium / Low",
  "Air Flow (Cubic Meters per Minute)": "Turbo / High / Med / Low: 2.2 / 2.1 / 1.7 / 1.5",
  "Size": "S / M / L / XL / 2XL / 3XL",
  "Pockets": "5",
  "Weight (Kilograms)": "0.43 (0.9 lbs.)"
},
       relatedProducts: [
    {
      id: 'cordless-jacket',
      name: 'Cordless Fan Jacket - DFJ210',
      image: dfj210,
      points: [
        "Air Flow Settings :Turbo / High / Medium / Low",
        "Size :S / M / L / XL / 2XL / 3XL",
        "Pockets :5",
        "Net weight:0.39 kg (0.9 lbs.)"
      ]
    },
    {
      id: 'cordless-jacket',
      name: 'Cordless Fan Jacket - DFJ211',
      image: dfj211,
      points: [
         "Air Flow Settings :Turbo / High / Medium / Low",
"Size :S / M / L / XL / 2XL / 3XL",
"Pockets : 5",
         "Net weight:0.41 kg (0.9 lbs.)"
      ]
    }, 
    {
      id: 'cordless-jacket',
      name: 'Cordless Fan Jacket - DFJ214',
      image: dfj214,
      points: [
        " Air Flow Settings :Turbo / High / Medium / Low",
         "Size :S / M / L / XL / 2XL / 3XL",
         "Pockets :5",
         "Net weight:0.54 kg (1.2 lbs.)",
      ]
    }, 
    {
      id: 'cordless-jacket',
      name: 'Cordless Fan Jacket - DFJ212',
      image: dfj212,
      points: [
         "Air Flow Settings :Turbo / High / Medium / Low",
         "Size :S / M / L / XL / 2XL / 3XL",
         "Pockets : 5",
         "Net weight:0.43 kg (0.9 lbs.)",
      ]
    },
    {
      id: 'cordless-jacket',
      name: 'Cordless Fan Jacket - DFJ213',
      image: dfj213,
      points: [
         "Air Flow Settings :Turbo / High / Medium / Low",
         "Size :S / M / L / XL / 2XL / 3XL",
         "Pockets : 5",
         "Net weight:0.54 kg (1.2 lbs.)",
      ]
    },  
    {
      id: 'cordless-jacket',
      name: 'Cordless Fan Vest - DFV210',
      image: dfv210,
      points: [
         "Air Flow Settings :Turbo / High / Medium / Low",
         "Size :S / M / L / XL / 2XL / 3XL",
         "Pockets : 3",
         "Net weight:0.38 kg (0.8 lbs.)",
      ]
    },
    //remove
   
    
  ]
    },
     'cordless-saw': {
  name: 'CORDLESS SAW',
  brand: 'Makita',
  description: 'Makita Cordless Saw delivers powerful and precise cutting performance, designed for wood, plastic, and metal with the flexibility of cordless operation.',
  image: main_saw,
  gallery: [
    saw_1,
    saw_2,
    saw_3
  ],
  features: [
    "Ergonomically designed rubberized grip for increased comfort and control",
    "A dust nozzle can be attached for connection to a Makita vacuum cleaner.",
    "Through-the-body dust port provides optimal dust management when used with a vacuum cleaner.",
  ],
  specifications: {
    "Sound Pressure Level (EN62841-2-11)": "85 dB(A)",
    "Sound Power Level (EN62841-2-11)": "93 dB(A)",
    "Noise K Factor (EN62841-2-11)": "3 dB(A)",
    "Dimensions (L x W x H)": "241 – 257 x 81 x 196 mm (9-1/2 – 10-1/8 x 3-3/16 x 7-3/4″)",
    "Dimensions (Battery)": "BLB182 – BL1860B",
    "Net Weight": "1.9 – 2.2 kg"
  },
       relatedProducts: [
   {
    id: 'cordless-saw',
    name: 'Cordless Circular Saw - DHS783',
    image: dhs783,
    points: [
      "Vibration K Factor:Cutting Metal: 1.5 m/s²",
      "Sound Pressure Level:93 dB(A)",
      "Sound Power Level:104 dB(A)",
      "Noise K Factor: 3 dB(A)",
      "Net weight:4.5 – 5.1 kg (9.9 – 11.3 lbs"
    ]
  },
  
  {
    id: 'cordless-saw',
    name: 'Cordless Slide Compound Miter Saw - DLS111',
    image: dls111,
    points: [
      "No Load Speed (RPM) :4,800",
      "Max Output :1,000 W",
      "Sound Pressure Level :89 dB(A)",
      "Sound Power Level :100 dB(A)",
      "Net weight :16.4 – 17.0 kg (36.2 – 37.6 lbs.)"
    ]
  },
  {
    id: 'cordless-saw',
    name: 'Cordless Plunge Cut Saw - DSP600',
    image: dsp600,
    points: [
      "Sound Power Level:103 dB(A)",
      "Noise K Factor:3 dB(A)",
      "Vibration Level:Cutting Wood: 2.5 m/s² or less",
      "Vibration K Factor:Cutting Metal: 1.5 m/s²",
      "Net weight:4.4 – 5.1 kg (9.8 – 11.2 lbs.)"
    ]
  } ,
  {
    id: 'cordless-saw',
    name: 'Cordless Slide Compound Miter Saw - DLS714',
    image: dls714,
    points: [
      "No Load Speed (RPM):5,700",
      "Sound Pressure Level:88 dB(A)",
      "Sound Power Level:97 dB(A)",
      "Noise K Factor:3 dB(A)",
      "Net weight:12.6 kg (27.8 lbs.)"
    ]
  },
  {
    id: 'cordless-saw',
    name: 'Cordless Circular Saw - DHS900',
    image: dhs900,
    points: [
      "Sound Pressure Level:93 dB(A)",
      "Sound Power Level:104 dB(A)",
      "Noise K Factor:3 dB(A)",
      "Net weight:5.3 – 6.0 kg (11.7 – 13.2 lbs.)"
    ]
  }
  ]
    },
'cordless-sander': {
  name: 'CORDLESS SANDER',
  brand: 'Makita',
  description: 'Makita Cordless Sander is built for smooth surface finishing, providing efficient sanding performance with dust collection and cordless mobility.',
  image: main_sander,
  gallery: [
    sander_1,
    sander_2,
    sander_3
  ],
  features: [
    "Two 18V LXT Li-Ion batteries deliver the power and performance for corded demands without leaving the 18V LXT platform",
    "High visibility of scale enables to adjust the scale without looking into the scale thanks to separation and relocation of scale",
    "Greater blade visibility from motor side",
  ],
  specifications: {
    "No Load Speed (RPM) - Polishing": "0 – 2,800",
"No Load Speed (RPM) - Sanding": "0 – 9,500",
"Max Output": "310 W",
"Vibration Level - Disc Sanding": "2.5 m/s² or less",
"Vibration Level - Polishing": "2.5 m/s² or less",
"Vibration K Factor - Disc Sanding": "1.5 m/s²",
"Vibration K Factor - Polishing": "1.5 m/s²",
"Sound Pressure Level": "73 dB(A)",
"Noise K Factor": "3 dB(A)",
"Net Weight": "1.3 – 1.6 kg (2.9 – 3.5 lbs.)"

  },
       relatedProducts: [
   {
    id: 'cordless-sander',
    name: 'cordless belt sander - 9031',
    image: s_9031,
    points: [
      "Belt Size :30 x 533 mm (1-3/16″ x 21″)",
      "Belt Speed :200 – 1,000 m/min (656 – 3,280 ft/min)",
      "Overall Length :380 mm (15″)",
      "Net weight :2.1 kg (4.6 lbs.)",
      "Power supply cord :2.5 m (8.2 ft)",
    ]
  },
  {
    id: 'cordless-sander',
    name: 'cordless belt sander - 9032',
    image: s_9032,
    points: [
      "Belt Size :9 x 533 mm (3/8″ x 21″)",
      "Max sanding depth :110 mm (4-5/16″)",
      "Overall Length :420 mm (16-1/2″)",
      "Net weight :1.6 kg (3.5 lbs.)"
    ]
  },
  {
    id: 'cordless-sander',
    name: 'Cordless wheel sander - 9741',
    image: s_9741,
    points: [
      "860W, 3500 rpm",
      "Rs. 25,000",
      "4.2kg"
    ]
  },
  {
    id: 'cordless-sander',
    name: 'Cordless finishing sander - BO3710 ',
    image: bo3710,
    points: [
      "Pad Size :93 x 185 mm (3-5/8″ x 7-1/4″)",
      "Orbits Per Minute (OPM) :11,000",
      "Vibration K Factor :1.5 m/s²",
      "Sound Pressure Level :72 dB(A)",
      "Net weight :1.6 kg (3.5 lbs.)"
    ]
  },
  {
    id: 'cordless-sander',
    name: 'Cordless finishing sander - BO4556',
    image: bo4556,
    points: [
      "Pad Size :112 x 102 mm (4-3/8″ x 4″) ",
      "Orbits Per Minute (OPM) :14,000",
      "Net weight :1.1 kg (2.5 lbs.)",
      "Power supply cord :2.0 m (6.6 ft)"
    ]
  } ,
  {
    id: 'cordless-saw',
    name: 'Cordless orbit sander - BO5031',
    image: bo5031,
    points: [
      "Abrasive Paper Size :125 mm (5″)",
      "Orbits Per Minute (OPM) :4,000-12,000",
      "Net weight :1.3 kg (3 lbs.)",
      "Power supply cord :2.0 m (6.6 ft)"
    ]
  },
  {
    id: 'cordless-saw',
    name: 'Cordless Random Snader - BO6030',
    image: bo6030,
    points: [
      "Pad Size :150 mm (6″)",
      "Abrasive Paper Size :150 mm (6″)",
      "Orbits Per Minute (OPM) :4,000-10,000",
      "Overall Length :309 mm (12-1/8″)",
      "Net weight :2.4 kg (5.2 lbs.)"
    ]
  }
  ]
    },
    
    // KOVAX PRODUCTS START FROM HERE

     'maxcut': {
      name: 'MAXCUT',
      brand: 'kovax',
      description: 'The most advanced coating technology that utilizes stone grouping and uniform grit layout with Laser Precision enables MAXCUT eminent performance with far superior cutting power and paper life while maintaining an uniform finish.',
      image: maxcut,
      gallery: [
        
      ],
      features: [
        'Uniform Stone Grouping',
        'Uniform grit layout',
        'Paper backed with Nylon pile.',
        
      ],
      specifications: {
        'Model No': 'M5 , 1/8 ,1/4',
        'Medium': 'Compressed air - Dry, Filtered, Lubricated',
        'Operating pressure range': '1.5 TO 10 bar',
        'Ambient temperature': '-10 to +60°C',
        'Flow * (1->2) (3->2)': '120  LPM , 250 LPM , 620 LPM',
        'Minimum Order': '100 pieces'
      }, 
    },
     'maxfilm': {
      name: 'MAXFILM',
      brand: 'kovax',
      description: 'The Special Backing Film, together with high performance grain and bonding agent enable an outstanding Cutting Power and Ultra Uniform Finish at the same time for MAX FILM Discs. ',
      image: maxfilm,
      gallery: [
        
      ],
      features: [
        'Film Backing',
        'Flatness of product',
        'Dual Sanding Medium',
        
      ],
      specifications: {
        '1':'Incomparable Durability and Tear Resistance',
        '2':'Extremely Uniform Finish due to smooth backing film',
        '3':'Can be used for Wet and Dry Sanding',
      }, 
      applications: [
    "Metal Drilling",
    "Wood Working",
    "Construction Projects",
  ]
    },
    'tri-pro': {
      name: 'TRI-PRO',
      brand: 'kovax',
      description: 'Tri-Pro Super Tack Disc has a beneficial effect on dry sanding with anti clogging system. In particular, TRI-PRO Super Tack Disc has powerful initial cutting power and also provides the user with gratifying result for uniform finishes',
      image: tripro,
      gallery: [
        
      ],
      features: [
        'Anti-Clogging System ',
        'Latex Backed paper',
        'Longer Product Life and uniform Finish ',        
      ],
      specifications: {
        'Product'	:'Tri-Pro',
'Form Factor'	: 'Disc',
        'Size'	: '6 Diameter',
       ' Packaging' :'Box',
       ' Quantity':'100',
       ' Attachment Type'	: 'Super-Tack'
      }, 
      applications: [
      "Dry sanding",
      "Sanding and finishing of fillers Primers, composite materials",
      "Wooden surfaces, wood coatings and drywalls"
  ]
    },
    'buflex': {
      name: 'BUFLEX',
      brand: 'kovax',
      description: 'A Unique system that promises to reduce buffing time by 50% or more. Buflex combines an ultra-flexible latex abrasive sheet and a specially formulated soft pad that cuts fast, but leaves behind a shallow scratch pattern that is much easier to polish than Grit P3000 or finer',
      image: buflex,
      gallery: [
      ],
      features: [
        'Patented Flexible Bond System  ',
        'Shallow Uniform Scratch Pattern',
        'Dry System',        
      ],
      specifications: {
        '1':'Maintaining the Structure of Clear Coat',
        '2'	: 'Reduction of Polishing Time Significantly',
        '3'	: 'Clean and efficient work practice',
      }, 
      applications: [
      "Removal of dirt and imperfections in Top Coat",
      "Black: >P3000",
      "Green: >P2000"
  ]
    },
    'finishing-system': {
      name: 'FINISHING SYSTEM',
      brand: 'kovax',
      description: 'Regarding imperfections, start with the Tolecut system and finish with Buflex Dry Black. In order to generate an even finer sanding scratch and reduce polishing time, you can use Buflex Dry Green before Buflex Dry Black and after Tolecut. After Buflex Dry Black, you can start polishing',
      image: finishing_main,
      gallery: [
        
      ],
      features: [
        'Patented Flexible Bond System  ',
        'Shallow Uniform Scratch Pattern',
        'Dry System',        
      ],
      specifications: {
        'Super Buflex Sheet - Black':'130 mm*170 mm with slit',
        'Super Buflex Sheet - Green'	: '130 mm*170 mm with slit',
        'Super Buflex ST Black'	: '35 mm',
      }, 
      applications: [
     " Automotive & Transportation",
     "Metal Industry",
     "Woodworking & Furniture"
  ]
    },
     'water-proof-paper': {
      name: 'WATER PROOF PAPER',
      brand: 'kovax',
      description: 'Premium SiC wet sanding paper with durability, speed, and extremely uniform abrasive grains. Sharp silicon carbide abrasive grain is resin-over-resin bonded on a highly flexible anti-slip backing which requires no pre-soaking before sanding',
      image: water_proof_main,
      gallery: [
       water_proof_1 ,
        water_proof_2,
        water_proof_3  
      ],
      features: [
        'Premium AlO Waterproof paper',
        'Anti-Slip backing',
        'Dry System',        
      ],
      specifications: {
        'Super Buflex Sheet - Black':'130 mm*170 mm with slit',
        'Super Buflex Sheet - Green'	: '130 mm*170 mm with slit',
        'Super Buflex ST Black'	: '35 mm',
      }, 
      
    },
    'filler-and-putty': {
      name: 'FILLER AND PUTTY',
      brand: 'kovax',
      description: 'Kovax Bodyfiller combines Smooth application and easy sanding. This filler can be used to fill dents and imperfections on most substrates.',
      image: filler_main,
      gallery: [
       
      ],
      features: [
        'Smooth and easy to sand',
        'Tack Free Surface which minimises Loading',
        'Excellent adhesion to almost all automotive substrates ',
      ],
      specifications: {
        'Adhesion Improvement': 'Final paint/finish ki bonding ko enhance karna',
        'Durability Enhancement': 'Surface ko long-lasting aur damage-resistant banana.',
        'Versatility': 'Wood, metal, concrete, plastic aur composites sabhi materials par use hone ki capability',
      },
      applications: [
      "Dents, scratches, and surface leveling in car bodies and parts",
      " Repairing worn-out parts and surface defects before coating",
      " Repairing wall cracks, uneven plaster, and surface finishing",
      "Smoothing weld joints, porosity and preparing base for coating"
  ] 
    },
     'masking-product': {
      name: 'MASKING PRODUCT',
      brand: 'kovax',
      description: 'Masking products are protective materials (tapes, films, papers, plugs, caps) used during painting, coating, plating, or surface treatment processes to cover specific areas that should not be coated or treated',
      image: masking_main,
      gallery: [
        masking_1,
        masking_2,
        masking_3
      ],
      features: [
        'Easy application and removal',
        'Strong adhesion with no surface damage',
        'Durable against chemicals, solvents, and heat',
        'Flexible and conformable to irregular shapes',
             
      ],
       relatedProducts: [
  {
    id: 'masking-tape',
    name: 'Premium Automotive Masking Tape',
    image: mt_1,
    points: [
      "7100023",
      "24mm x 30m",
    ]
  },
  {
    id: 'masking-tape',
    name: 'Smooth Edge Foam Masking Tape ',
    image: mt_2,
    points: [
      "7100020",
      "50mm x 10m",
    ]
  },
  {
    id: 'masking-tape',
    name: 'Perforated Trim Masking Tape',
    image: mt_3,
    points: [
      "7100020",
      "9mm x 55m",
    ]
  },
  {
    id: 'masking-tape',
    name: 'Plastic Masking Film',
    image: mt_4,
    points: [
      "7100016",
      "4m x 150m",
    ]
  },
],
      specifications: {
        "High Temperature Resistance": "Powder coating aur baking process ke liye heat resistance provide karte hain.",
      "Clean Removal": "Adhesive residue ke bina aasani se remove ho jate hain.",
      "Multi-Surface Compatibility": "Metal, plastic, glass, wood par equally effective hote hain.",
      "Variety of Forms": "Tapes, dots, die-cuts, plugs, caps, films ke form me available.",
      },
      applications: [
      "Dents, scratches, and surface leveling in car bodies and parts",
      " Repairing worn-out parts and surface defects before coating",
      " Repairing wall cracks, uneven plaster, and surface finishing",
      "Smoothing weld joints, porosity and preparing base for coating"
  ] 
    },
     'component-and-accessories': {
      name: 'ACCESSORIES PRODUCTS',
      brand: 'kovax',
      description: 'Kovax offers a wide range of tools and accessories that provide a complete sanding solution that is optimized to perform best with Kovax Abrasive Products. The range is constantly being updated to ensure that the customer gets the latest versions on technology updation',
      image: accessories_main,
      gallery: [
        accessories_1,
        accessories_2,
        accessories_2
      ],
      features: [
        'Kovax Sanding Machines are effective and durable tools for professional sanding',
        'in order to combine optimal strength and user comfort',
      ],
       relatedProducts: [
  {
    id: 'masking-tape',
    name: 'Premium Automotive Masking Tape',
    image: mt_1,
    points: [
      "7100023",
      "24mm x 30m",
    ]
  },
  {
    id: 'masking-tape',
    name: 'Smooth Edge Foam Masking Tape ',
    image: mt_2,
    points: [
      "7100020",
      "50mm x 10m",
    ]
  },
  {
    id: 'masking-tape',
    name: 'Perforated Trim Masking Tape',
    image: mt_3,
    points: [
      "7100020",
      "9mm x 55m",
    ]
  },
  {
    id: 'masking-tape',
    name: 'Plastic Masking Film',
    image: mt_4,
    points: [
      "7100016",
      "4m x 150m",
    ]
  },
],
      specifications: {
        "High Temperature Resistance": "Powder coating aur baking process ke liye heat resistance provide karte hain.",
      "Clean Removal": "Adhesive residue ke bina aasani se remove ho jate hain.",
      "Multi-Surface Compatibility": "Metal, plastic, glass, wood par equally effective hote hain.",
      "Variety of Forms": "Tapes, dots, die-cuts, plugs, caps, films ke form me available.",
      },
      applications: [
      "Dents, scratches, and surface leveling in car bodies and parts",
      " Repairing worn-out parts and surface defects before coating",
      " Repairing wall cracks, uneven plaster, and surface finishing",
      "Smoothing weld joints, porosity and preparing base for coating"
  ] 
    }, 
  };

  if (!category || !product || !productData[product as keyof typeof productData]) {
    return <Navigate to="/" replace />;
  }
  const currentProduct = productData[product as keyof typeof productData];

return (
    <>
      <Helmet>
        <title>{currentProduct.name} - Garv Enterprises - Yes You Can Trust Us!</title>
        <title>{currentProduct.name} - Industrial Tools | Garv Enterprises</title>
        <meta name="description" content={currentProduct.description} />
        <meta name="keywords" content={`${currentProduct.name.toLowerCase()}, industrial tools, ${category}, Garv Enterprises, buy ${currentProduct.name.toLowerCase()} online`} />
        <link rel="canonical" href={`https://garventerprises.in/products/${category}/${product}`} />

        {/* Open Graph */}
        <meta property="og:title" content={`${currentProduct.name} - Industrial Tools`} />
        <meta property="og:description" content={currentProduct.description} />
        <meta property="og:image" content={currentProduct.image} />
        <meta property="og:url" content={`https://garventerprises.in/products/${category}/${product}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": currentProduct.name,
            "description": currentProduct.description,
            "image": currentProduct.image,
            "category": currentProduct.category,
            "manufacturer": {
              "@type": "Organization",
              "name": "Garv Enterprises"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR"
            }
          })}
        </script>
      </Helmet>

      <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8"
          >
            <Link 
              to="/products"
              className="flex items-center hover:text-accent-coral transition-colors"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />                         
              Products    
            </Link>                                                         
            <span>/</span>                                                    
            <span className="capitalize">{category}</span>
            <span>/</span>
            <span className="text-primary-dark font-medium truncate max-w-[120px] sm:max-w-none">{currentProduct.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <img 
  src={currentProduct.image}
  alt={currentProduct.name}
  className="w-full h-52 sm:h-64 lg:h-80 object-contain rounded-lg sm:rounded-xl shadow-md mb-2 sm:mb-3 bg-gray-100 p-2 sm:p-3"
/>        
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {currentProduct.gallery.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`${currentProduct.name} ${index + 1}`}
                    className="w-full h-16 sm:h-20 lg:h-24 object-contain rounded-md sm:rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer bg-gray-100 p-1 sm:p-2 hover:scale-105"
                  />
                ))}
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-3 sm:mb-4">
                <span className="text-primary-orange text-xs sm:text-sm font-medium bg-primary-orange/10 px-2 sm:px-3 py-1 rounded">
                  {currentProduct.brand}
                </span>
              </div>
              
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight">
                {currentProduct.name}
              </h1>
              
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {currentProduct.description}
              </p>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-3 sm:mb-4">Key Features</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-orange mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary-orange mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Premium Quality</p>
                </div>
                <div className="text-center">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-primary-orange mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary-orange mx-auto mb-1" />
                  <p className="text-xs text-gray-600">ISO Certified</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="flex-1 bg-primary-orange text-white py-3 px-4 sm:px-6 rounded font-medium text-sm sm:text-base text-center hover:bg-primary-orange/90 transition-colors"
                >
                  Get Quote
                </button>
                <Link 
                  to="/contact"
                  className="flex-1 border border-primary-dark text-primary-dark py-3 px-4 sm:px-6 rounded font-medium text-sm sm:text-base text-center hover:bg-primary-dark hover:text-white transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Specifications and Applications */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Specifications */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">Specifications</h3>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {Object.entries(currentProduct.specifications).map(([key, value], index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-2 sm:py-3 px-3 sm:px-6 font-medium text-primary-dark border-r border-gray-200 text-sm sm:text-base">
                            {key.includes(':') ? key : `${key}:`}
                          </td>
                          <td className="py-2 sm:py-3 px-3 sm:px-6 text-gray-700 text-sm sm:text-base">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications - Optional Section */}
              {currentProduct.applications && currentProduct.applications.length > 0 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-4 sm:mb-6">Applications</h3>
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {currentProduct.applications.map((application, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-orange mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Related Products */}
          {currentProduct.relatedProducts && currentProduct.relatedProducts.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 sm:mt-16"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-6 sm:mb-8">Related Products</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentProduct.relatedProducts.map((relatedProduct, index) => (
                  <motion.div 
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {/* IMAGE PART */}
                    <div className="relative overflow-hidden flex items-center justify-center bg-gray-50">
                      <img 
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-32 sm:h-36 object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                    
                    {/* CONTENT PART */}
                    <div className="p-3 sm:p-4">
                      <h4 className="text-sm sm:text-base font-bold text-primary-dark mb-2 group-hover:text-primary-orange transition-colors leading-tight">
                        {relatedProduct.name}
                      </h4>
                      
                      <ul className="space-y-1 mb-3">
                        {relatedProduct.points.slice(0, 4).map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <CheckCircle className="h-3 w-3 text-primary-orange mr-1.5 flex-shrink-0 mt-1" />
                            <span className="text-xs text-gray-600 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* BUTTONS */}
                      <div className="flex gap-1.5">
                        <button 
                          onClick={() => {
                            setIsQuoteModalOpen(true);
                            // You can also set a different product for the quote if needed
                          }}
                          className="flex-1 bg-primary-orange text-white py-1.5 px-2 rounded text-xs font-medium hover:bg-primary-orange/90 transition-colors"
                        >
                          Quote
                        </button>
                        <Link 
                          to="/contact"
                          className="flex-1 border border-primary-dark text-primary-dark py-1.5 px-2 rounded text-xs font-medium text-center hover:bg-primary-dark hover:text-white transition-colors"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName={currentProduct.name}
        productCategory={category}
      />
    </>
);
};

export default ProductDetailPage;