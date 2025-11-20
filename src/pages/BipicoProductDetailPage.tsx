import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Package, Settings, ShoppingCart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteModal from '../components/common/QuoteModal';
import abrasive_cutting from "../assets/bipico/abrasive_cutting.png";
import aluminium_oxide_flap_disc from "../assets/bipico/aluminium_oxide.png";
import bipico_hole_saw from "../assets/bipico/bipico_hole_saw.png";
import diamond_saw_blade from "../assets/bipico/diamond_saw_blade.png";
import flap_disc from "../assets/bipico/flap_disc.png";
import flap_wheel from "../assets/bipico/flap_wheel.png";
import non_woven_disc from "../assets/bipico/non_woven_disc.png";
import pata from "../assets/bipico/pata.png";
import resin_belt from "../assets/bipico/resin_belt.png";
import tct_circular_cutter from "../assets/bipico/tct_circular_saw.png";

const BipicoProductDetailPage = () => {
  const { productId } = useParams();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

 const productData = {
    'bipico-hole-saw': {
      name: 'BIPICO HOLE SAW',
      description: 'Our HSS All Hard Hole saws are made from HSS M2 Material ,Single Piece Construction: Comes with BPA 02 Arbor and ejector spring for easy use.It has an additional teeth relief gullet at each tooth for efficient chip removal while drilling',
      image: bipico_hole_saw,
      applications: [
        'Industrial Automation Systems',
        'Manufacturing Assembly Lines',
        'Material Handling Equipment',
        'Packaging Machinery',
        'Robotic Applications',
        'Process Control Systems'
      ],
      additionalProducts: [],
      tables: [
        {
          title: 'Drill Bit Pricing Data',
          data: [
            { size_mm: '12', size_inch: '1/2', boresmart: '275', universal: '333', precision: '', tct: '210', hss: '', unit: '1' },
            { size_mm: '14', size_inch: '9/16', boresmart: '', universal: '348', precision: '448', tct: '220', hss: '', unit: '1' },
            { size_mm: '19', size_inch: '3/4', boresmart: '315', universal: '371', precision: '320', tct: '270', hss: '613', unit: '1' },
            { size_mm: '22', size_inch: '7/8', boresmart: '335', universal: '383', precision: '352', tct: '320', hss: '624', unit: '1' },
            { size_mm: '25', size_inch: '1', boresmart: '335', universal: '388', precision: '398', tct: '360', hss: '641', unit: '1' },
            { size_mm: '30', size_inch: '1.3/16', boresmart: '', universal: '', precision: '448', tct: '420', hss: '', unit: '1' },
            { size_mm: '32', size_inch: '1.1/4', boresmart: '370', universal: '411', precision: '448', tct: '460', hss: '712', unit: '1' },
            { size_mm: '35', size_inch: '1.3/8', boresmart: '385', universal: '433', precision: '462', tct: '550', hss: '', unit: '1' },
            { size_mm: '38', size_inch: '1.1/2', boresmart: '405', universal: '441', precision: '481', tct: '580', hss: '', unit: '1' },
            { size_mm: '40', size_inch: '1.9/16', boresmart: '415', universal: '449', precision: '499', tct: '600', hss: '', unit: '1' },
            { size_mm: '44', size_inch: '1.3/4', boresmart: '435', universal: '467', precision: '564', tct: '650', hss: '', unit: '1' },
            { size_mm: '48', size_inch: '1.7/8', boresmart: '460', universal: '481', precision: '589', tct: '700', hss: '', unit: '1' },
            { size_mm: '51', size_inch: '2', boresmart: '465', universal: '499', precision: '609', tct: '720', hss: '', unit: '1' },
            { size_mm: '54', size_inch: '2.1/8', boresmart: '470', universal: '512', precision: '659', tct: '850', hss: '', unit: '1' },
            { size_mm: '60', size_inch: '2.3/8', boresmart: '520', universal: '564', precision: '718', tct: '900', hss: '', unit: '1' },
            { size_mm: '64', size_inch: '2.1/2', boresmart: '580', universal: '627', precision: '743', tct: '950', hss: '', unit: '1' },
            { size_mm: '67', size_inch: '2.5/8', boresmart: '590', universal: '634', precision: '769', tct: '1000', hss: '', unit: '1' },
            { size_mm: '70', size_inch: '2.3/4', boresmart: '630', universal: '639', precision: '794', tct: '1050', hss: '', unit: '1' },
            { size_mm: '76', size_inch: '3', boresmart: '680', universal: '736', precision: '833', tct: '1100', hss: '', unit: '1' },
            { size_mm: '79', size_inch: '3.1/8', boresmart: '680', universal: '743', precision: '833', tct: '1150', hss: '', unit: '1' },
            { size_mm: '83', size_inch: '3.1/4', boresmart: '790', universal: '833', precision: '883', tct: '', hss: '', unit: '1' },
            { size_mm: '89', size_inch: '3.1/2', boresmart: '800', universal: '845', precision: '909', tct: '1520', hss: '', unit: '1' },
            { size_mm: '92', size_inch: '3.5/8', boresmart: '845', universal: '897', precision: '928', tct: '1575', hss: '', unit: '1' },
            { size_mm: '95', size_inch: '3.3/4', boresmart: '910', universal: '961', precision: '999', tct: '1680', hss: '', unit: '1' },
            { size_mm: '102', size_inch: '4', boresmart: '1000', universal: '1023', precision: '1128', tct: '', hss: '', unit: '1' },
            { size_mm: '105', size_inch: '4.1/8', boresmart: '', universal: '', precision: '1216', tct: '', hss: '1850', unit: '1' },
            { size_mm: '108', size_inch: '4.1/4', boresmart: '', universal: '', precision: '1472', tct: '', hss: '', unit: '1' },
            { size_mm: '111', size_inch: '4.3/8', boresmart: '', universal: '', precision: '1562', tct: '', hss: '', unit: '1' },
            { size_mm: '114', size_inch: '4.1/2', boresmart: '', universal: '', precision: '1614', tct: '', hss: '', unit: '1' },
            { size_mm: '121', size_inch: '4.3/4', boresmart: '', universal: '', precision: '1792', tct: '', hss: '', unit: '1' },
            { size_mm: '127', size_inch: '5', boresmart: '', universal: '', precision: '1895', tct: '', hss: '', unit: '1' },
            { size_mm: '133', size_inch: '5.1/4', boresmart: '', universal: '', precision: '2049', tct: '', hss: '', unit: '1' },
            { size_mm: '140', size_inch: '5.1/2', boresmart: '', universal: '', precision: '2305', tct: '', hss: '', unit: '1' },
            { size_mm: '152', size_inch: '6', boresmart: '', universal: '', precision: '2432', tct: '', hss: '', unit: '1' },
            { size_mm: '165', size_inch: '6.5/16', boresmart: '', universal: '', precision: '2561', tct: '', hss: '', unit: '1' },
            { size_mm: '183', size_inch: '7.3/16', boresmart: '', universal: '', precision: '2688', tct: '', hss: '', unit: '1' },
            { size_mm: '210', size_inch: '8.9/32', boresmart: '', universal: '', precision: '2688', tct: '', hss: '', unit: '1' }
          ]
        }

      ]
    },
    'pata-high-speed-steel': {
      name: 'PATA-HIGH SPEED STEEL',
      description: 'A Unique product to cater to vast industrial application & wood working, Available in two grades i.e. Low Alloy Steel & High Speed Steel. 550 X.',
      image: pata,
      applications: [
        'Pneumatic Tool Protection',
        'Air Compressor Systems',
        'Automated Manufacturing Lines',
        'Spray Painting Equipment',
        'Pneumatic Control Panels',
        'Industrial Machinery'
      ],
      additionalProducts: [],
      tables: [
        {
          title: 'Low Alloy Steel - Pata',
          data: [
            { size_mm: '300 x 19 x 0.80', size_inch: '12 x 3/4 x 0.032', price_rs_pc: '32' },
            { size_mm: '350 x 19 x 0.80', size_inch: '14 x 3/4 x 0.032', price_rs_pc: '34' },
            { size_mm: '300 x 19 x 1.25', size_inch: '12 x 3/4 x 0.050', price_rs_pc: '37' },
            { size_mm: '350 x 25 x 1.25', size_inch: '14 x 1 x 0.050', price_rs_pc: '54' },
            { size_mm: '150 x 32 x 1.6',  size_inch: '6 x 1.1/4 x 0.062', price_rs_pc: '37' },
            { size_mm: '250 x 32 x 1.6',  size_inch: '10 x 1.1/4 x 0.062', price_rs_pc: '61' },
            { size_mm: '225 x 32 x 1.6',  size_inch: '13 x 1.1/4 x 0.062', price_rs_pc: '79' },
            { size_mm: '350 x 32 x 1.6',  size_inch: '14 x 1.1/4 x 0.062', price_rs_pc: '82' },
            { size_mm: '400 x 32 x 1.6',  size_inch: '16 x 1.1/4 x 0.062', price_rs_pc: '93' },
            { size_mm: '450 x 32 x 1.6',  size_inch: '18 x 1.1/4 x 0.062', price_rs_pc: '102' },
            { size_mm: '150 x 38 x 1.6',  size_inch: '6 x 1.1/2 x 0.062', price_rs_pc: '39' },
            { size_mm: '175 x 38 x 1.6',  size_inch: '7 x 1.1/2 x 0.062', price_rs_pc: '47' },
            { size_mm: '225 x 38 x 1.6',  size_inch: '9 x 1.1/2 x 0.062', price_rs_pc: '58' }
          ] 
        },
        {
          title: 'Low Alloy Steel - Pata',
          data: [
            { size_mm: '350 x 38 x 1.6', size_inch: '14 x 1.1/2 x 0.062', price_rs_pc: '84' },
            { size_mm: '450 x 38 x 1.6', size_inch: '18 x 1.1/2 x 0.062', price_rs_pc: '110' },
            { size_mm: '150 x 45 x 1.6', size_inch: '6 x 1.3/4 x 0.062', price_rs_pc: '47' },
            { size_mm: '175 x 45 x 1.6', size_inch: '7 x 1.3/4 x 0.062', price_rs_pc: '51' },
            { size_mm: '225 x 45 x 1.6', size_inch: '9 x 1.3/4 x 0.062', price_rs_pc: '64' },
            { size_mm: '450 x 45 x 1.6', size_inch: '18 x 1.3/4 x 0.062', price_rs_pc: '134' },
            { size_mm: '175 x 50 x 1.6', size_inch: '7 x 2 x 0.062', price_rs_pc: '58' },
            { size_mm: '225 x 50 x 1.6', size_inch: '9 x 2 x 0.062', price_rs_pc: '75' },
            { size_mm: '350 x 50 x 1.6', size_inch: '14 x 2 x 0.062', price_rs_pc: '118' },
            { size_mm: '375 x 50 x 1.6', size_inch: '15 x 2 x 0.062', price_rs_pc: '118' },
            { size_mm: '400 x 50 x 1.6', size_inch: '16 x 2 x 0.062', price_rs_pc: '123' },
            { size_mm: '425 x 50 x 1.6', size_inch: '17 x 2 x 0.062', price_rs_pc: '140' },
            { size_mm: '450 x 50 x 1.6', size_inch: '18 x 2 x 0.062', price_rs_pc: '162' }
          ]
        }
      ]
    },
    'abrasives-cutting-grinding-disc': {
      name: 'ABRASIVE CUTTING DISC & GRINDING DISC',
      description: 'High-Performance Abrasive for Metal, Stainless Steel, and Leaves no burning marks on the work piece. Precious Metals. Demonstrates impressive durability and provides an excellent Leaves No Burning Marks on the Work Piece. finish. Ensures Good Durability and Excellent Finish. • Enables fast and smooth cutting for efficient operations',
      image: abrasive_cutting,
      applications: [
        'Automated Control Systems',
        'Process Control',
        'Pneumatic Circuits',
        'Hydraulic Systems',
        'Medical Equipment',
        'Food Processing Machinery'
      ],
      additionalProducts: [],
      tables: [
        {
          title: 'Cutting Disc for Metal - Flat (T41)',
          data: [
            { size_mm: '100 x 3.0 x 16.0', type: 'Metal', net: '2', price_rs_pc: '28', unit_pack_qty: '50', master_cartoon_qty: '200' },
            { size_mm: '125 x 3.0 x 22.2', type: 'Metal', net: '2', price_rs_pc: '48', unit_pack_qty: '50', master_cartoon_qty: '200' },
            { size_mm: '180 x 3.0 x 22.2', type: 'Metal', net: '2', price_rs_pc: '87', unit_pack_qty: '50', master_cartoon_qty: '100' },
            { size_mm: '300 x 3.0 x 25.4', type: 'Metal', net: '1', price_rs_pc: '193', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '305 x 2.0 x 25.4 Green / Black', type: 'Metal', net: '2', price_rs_pc: '178', unit_pack_qty: '30', master_cartoon_qty: '30' },
            { size_mm: '350 x 3.0 x 25.4', type: 'Metal', net: '1', price_rs_pc: '244', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '350 x 2.8 x 25.4', type: 'Metal', net: '1', price_rs_pc: '244', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '350 x 2.8/3.0 x 25.4', type: 'Metal', net: '1', price_rs_pc: '272', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '355 x 2.5 x 25.4 Green', type: 'Metal', net: '2', price_rs_pc: '272', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '355 x 2.5 x 25.4 Green', type: 'Metal', net: '1', price_rs_pc: '244', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '400 x 4.0 x 25.4 / 22.23', type: 'Railcut', net: '2', price_rs_pc: '1455', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '400 x 4.0 x 25.4', type: 'SS', net: '2', price_rs_pc: '563', unit_pack_qty: '25', master_cartoon_qty: '25' }
          ]
        },
        {
          title: 'Cutting Disc for Stainless Steel - Flat (T41)',
          data: [
            { size_mm: '105 x 1.0 x 16.0 Green / Black / Maroon', type: 'Inox / Metal', net: '2', price_rs_pc: '28', unit_pack_qty: '50', master_cartoon_qty: '400' },
            { size_mm: '100 x 1.6 x 16.0', type: 'Inox / Metal', net: '2', price_rs_pc: '28', unit_pack_qty: '100', master_cartoon_qty: '400' },
            { size_mm: '125 x 1.0 x 22.2 Green / Black', type: 'Inox / Metal', net: '2', price_rs_pc: '49', unit_pack_qty: '100', master_cartoon_qty: '400' },
            { size_mm: '125 x 1.6 x 22.2', type: 'Inox / Metal', net: '2', price_rs_pc: '49', unit_pack_qty: '100', master_cartoon_qty: '400' },
            { size_mm: '180 x 1.6 x 22.2', type: 'Inox / SS', net: '2', price_rs_pc: '99', unit_pack_qty: '50', master_cartoon_qty: '200' },
            { size_mm: '230 x 2.0 x 22.2', type: 'Inox / Metal', net: '2', price_rs_pc: '142', unit_pack_qty: '50', master_cartoon_qty: '50' },
            { size_mm: '250 x 1.3 x 25.4 Green / Black', type: 'Inox / Metal', net: '2', price_rs_pc: '179', unit_pack_qty: '50', master_cartoon_qty: '50' },
            { size_mm: '250 x 2.0 x 25.4', type: 'Inox / Metal', net: '2', price_rs_pc: '179', unit_pack_qty: '50', master_cartoon_qty: '50' }
          ]
        },
        {
          title: 'Grinding Disc for Metal - DC (T27)',
          data: [
            { size_mm: '102 x 2.8 x 16.0', type: 'Flexi Green', net: '2', price_rs_pc: '46', unit_pack_qty: '20', master_cartoon_qty: '240' },
            { size_mm: '100 x 4.0 x 16.0', type: 'Metal', net: '2.5', price_rs_pc: '45', unit_pack_qty: '25', master_cartoon_qty: '200' },
            { size_mm: '100 x 6.0 x 16.0', type: 'Metal', net: '2.5', price_rs_pc: '50', unit_pack_qty: '25', master_cartoon_qty: '200' },
            { size_mm: '125 x 5.0 x 22.2', type: 'Metal', net: '2.5', price_rs_pc: '74', unit_pack_qty: '25', master_cartoon_qty: '100' },
            { size_mm: '125 x 6.0 x 22.2', type: 'Metal', net: '2.5', price_rs_pc: '87', unit_pack_qty: '25', master_cartoon_qty: '100' },
            { size_mm: '125 x 7.0 x 22.2', type: 'Metal', net: '2.5', price_rs_pc: '87', unit_pack_qty: '25', master_cartoon_qty: '100' },
            { size_mm: '180 x 6.0 x 22.2', type: 'Metal', net: '2.5', price_rs_pc: '139', unit_pack_qty: '25', master_cartoon_qty: '50' },
            { size_mm: '180 x 7.0 x 22.2', type: 'Metal', net: '2.5', price_rs_pc: '159', unit_pack_qty: '25', master_cartoon_qty: '50' },
            { size_mm: '180 x 7.0 x 22.2', type: 'Metal', net: '3', price_rs_pc: '159', unit_pack_qty: '25', master_cartoon_qty: '50' },
            { size_mm: '230 x 6.0 x 22.2', type: 'Metal', net: '2.5', price_rs_pc: '215', unit_pack_qty: '25', master_cartoon_qty: '25' },
            { size_mm: '230 x 7.0 x 22.2', type: 'Metal', net: '2.5/3', price_rs_pc: '239', unit_pack_qty: '25', master_cartoon_qty: '25' }
          ]
        }

      ]
    },
    'flap-disc-oxide': {
      name: 'FLAP DISC - ALUMINIUM OXIDE',
      description: 'Quick-connect pneumatic fittings for fast and reliable tube connections. One-touch design allows for easy installation and removal without tools. Available in various thread types and tube sizes to accommodate different system requirements.',
      image: flap_disc,
      applications: [
        'Pneumatic Tool Connections',
        'Air Line Assembly',
        'Cylinder Connections',
        'Valve Manifolds',
        'Control Panel Plumbing',
        'Machine Tool Applications'
      ],
      additionalProducts: [],
      tables: [
        {
  title: 'Flap Disc ',
  data: [
    { size_mm: '100 x 16', type: 'Metal', grit: '36', price_rs_pc: '59', unit_pack_qty: '20', master_cartoon_qty: '200' },
    { size_mm: '100 x 16', type: 'Metal', grit: '60/80/120', price_rs_pc: '48', unit_pack_qty: '20', master_cartoon_qty: '200' },
    { size_mm: '100 x 16', type: 'Zircon (SS)', grit: '60', price_rs_pc: '99', unit_pack_qty: '20', master_cartoon_qty: '200' },
    { size_mm: '100 x 16', type: 'Zircon (SS)', grit: '80', price_rs_pc: '99', unit_pack_qty: '20', master_cartoon_qty: '200' },
    { size_mm: '100 x 16', type: 'Extreme', grit: '60/80', price_rs_pc: '59', unit_pack_qty: '20', master_cartoon_qty: '200' },
    { size_mm: '100 x 16', type: 'Premium', grit: '60/80/120', price_rs_pc: '52', unit_pack_qty: '20', master_cartoon_qty: '200' },
    { size_mm: '125 x 22.2', type: 'Metal', grit: '60/80/120', price_rs_pc: '81', unit_pack_qty: '20', master_cartoon_qty: '200' },
    { size_mm: '125 x 22.2', type: 'Premium', grit: '60/80/120', price_rs_pc: '84', unit_pack_qty: '20', master_cartoon_qty: '200' }
  ]
},
      ]
    },
     'flap-wheel-shaft': {
      name: 'FLAP WHEEL ON SHAFT',
      description: 'Used for polishing, debarring & removal of rust, scratches on all metals',
      image: flap_wheel,
      applications: [
        'Pneumatic Tool Connections',
        'Air Line Assembly',
        'Cylinder Connections',
        'Valve Manifolds',
        'Control Panel Plumbing',
        'Machine Tool Applications'
      ],
      additionalProducts: [],
      tables: [
       {
  title: 'Flap Wheel on Shaft',
  data: [
    { size: '25 x 25 mm', type: 'Metal', grit: '60/80/120', price_rs_pc: '55', unit_pack_qty: '10', master_cartoon_qty: '1000' },
    { size: '40 x 25 mm', type: 'Metal', grit: '60/80/120', price_rs_pc: '76', unit_pack_qty: '10', master_cartoon_qty: '1000' },
    { size: '50 x 25 mm', type: 'Metal', grit: '60/80/120', price_rs_pc: '104', unit_pack_qty: '10', master_cartoon_qty: '1000' },
    { size: '60 x 25 mm', type: 'Metal', grit: '60/80/120', price_rs_pc: '104', unit_pack_qty: '10', master_cartoon_qty: '1000' },
    { size: '80 x 25 mm', type: 'Metal', grit: '60/80/120', price_rs_pc: '151', unit_pack_qty: '10', master_cartoon_qty: '1000' },
    { size: '50 x 50 mm', type: 'Metal', grit: '60/80/120', price_rs_pc: '110', unit_pack_qty: '10', master_cartoon_qty: '1000' },
    { size: '50 x 75 mm', type: 'Metal', grit: '60/80/120', price_rs_pc: '160', unit_pack_qty: '10', master_cartoon_qty: '1000' }
  ]
}
      ]
    },
    'aluminium-velcro-disc': {
      name: 'ALUMINIUM OXIDE VELCRO DISC',
      description: 'Our tool-free, fast-changing disc finds widespread use across various industries, including automotive, hardware, electronics, plastic, furniture, hand-crafts, and low alloy polishing. Enjoy quick and effortless disc replacement for enhanced productivity and',
      image: aluminium_oxide_flap_disc,
      applications: [
        'Pneumatic Tool Connections',
        'Air Line Assembly',
        'Cylinder Connections',
        'Valve Manifolds',
        'Control Panel Plumbing',
        'Machine Tool Applications'
      ],
      additionalProducts: [],
      tables: [
      {
  title: 'Abrasive Discs - Large / Metal Type',
  data: [
    { size: '125 MM', type: 'Metal', grit: '36', price_rs_pc: '13', unit_pack_qty: '100', master_cartoon_qty: '1000' },
    { size: '125 MM', type: 'Metal', grit: '40', price_rs_pc: '12', unit_pack_qty: '100', master_cartoon_qty: '1000' },
    { size: '125 MM', type: 'Metal', grit: '60/80/100', price_rs_pc: '11', unit_pack_qty: '100', master_cartoon_qty: '1000' },
    { size: '150 MM', type: 'Metal', grit: '60/80/100', price_rs_pc: '14', unit_pack_qty: '100', master_cartoon_qty: '1000' },
    { size: '150 MM', type: 'Metal', grit: '120/150/220', price_rs_pc: '14', unit_pack_qty: '100', master_cartoon_qty: '1000' },
    { size: '150 MM', type: 'Metal', grit: '240/320/400/600/800', price_rs_pc: '14', unit_pack_qty: '100', master_cartoon_qty: '1000' },
    { size: '100 MM', type: 'Metal', grit: '320', price_rs_pc: '14', unit_pack_qty: '100', master_cartoon_qty: '1000' }
  ]
}

      ]
    },
    'resin-felt-cloth-belt': {
      name: 'RESIN FELT CLOTH BELT',
      description: 'Our Aluminum Oxide Abrasive Cloth Roll is designed for joint belt and disc applications. It comes in various grit options, making it suitable for polishing, surface cleaning, and metal removal tasks in industries such as automotive, furniture, aviation, and engineering',
      image: resin_belt,
      applications: [
        'Pneumatic Tool Connections',
        'Air Line Assembly',
        'Cylinder Connections',
        'Valve Manifolds',
        'Control Panel Plumbing',
        'Machine Tool Applications'
      ],
      additionalProducts: [],
      tables: [
    {
  title: 'Abrasive Belts - Metal & Zircon',
  data: [
    { size: '50MM x 2000 MM', type: 'Metal', grit: '36', price_rs_pc: '100', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '50MM x 2000 MM', type: 'Metal', grit: '60/80/120/180', price_rs_pc: '90', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '50MM x 3000 MM', type: 'Metal', grit: '60/120', price_rs_pc: '135', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '50MM x 3500 MM', type: 'Metal', grit: '36', price_rs_pc: '196', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '50MM x 3500 MM', type: 'Metal', grit: '60/80/120', price_rs_pc: '158', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '50MM x 3500 MM', type: 'Metal', grit: '180', price_rs_pc: '171', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '50MM x 3500 MM', type: 'Metal', grit: '400', price_rs_pc: '190', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '100MM x 1220 MM', type: 'Metal', grit: '60/80/120', price_rs_pc: '113', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 1220 MM', type: 'Metal', grit: '36', price_rs_pc: '180', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 1220 MM', type: 'Metal', grit: '60/80/120', price_rs_pc: '169', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 1220 MM (Zircon)', type: 'Metal', grit: '60', price_rs_pc: '405', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 3500 MM', type: 'Metal', grit: '60/80', price_rs_pc: '488', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 2000 MM', type: 'Metal', grit: '36', price_rs_pc: '317', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 2000 MM', type: 'Metal', grit: '60', price_rs_pc: '266', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 2000 MM', type: 'Metal', grit: '80/120', price_rs_pc: '281', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 2000 MM', type: 'Metal', grit: '180', price_rs_pc: '256', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 2000 MM (Zircon)', type: 'Metal', grit: '24', price_rs_pc: '770', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '150MM x 2000 MM (Zircon)', type: 'Metal', grit: '36', price_rs_pc: '732', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 2000 MM', type: 'Metal', grit: '36', price_rs_pc: '305', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 2000 MM', type: 'Metal', grit: '60/120/180/220', price_rs_pc: '268', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 3000 MM', type: 'Metal', grit: '60/120', price_rs_pc: '197', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 3500 MM', type: 'Metal', grit: '60', price_rs_pc: '247', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 3500 MM', type: 'Metal', grit: '80', price_rs_pc: '224', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 3500 MM', type: 'Metal', grit: '120/320', price_rs_pc: '217', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 3500 MM', type: 'Metal', grit: '400', price_rs_pc: '224', unit_pack_qty: '10', master_cartoon_qty: '50' },
    { size: '75MM x 3500 MM', type: 'Metal', grit: '600', price_rs_pc: '247', unit_pack_qty: '10', master_cartoon_qty: '50' }
  ]
}


      ]
    },
     'non-woven-polishing-disc': {
      name: 'NON WOVEN POLISHING DISC',
      description: 'Ideal for rust removal from any surface, as well as sharp polishing and cleaning of both metal and tile',
      image: non_woven_disc,
      applications: [
        'Pneumatic Tool Connections',
        'Air Line Assembly',
        'Cylinder Connections',
        'Valve Manifolds',
        'Control Panel Plumbing',
        'Machine Tool Applications'
      ],
      additionalProducts: [],
      tables: [
{
  title: 'Abrasive Belts - Non Woven',
  data: [
    { size: '4" x 13m', color: 'Orange', grit: 'U3', unit_pack_qty: '300', price_rs_pc: '68' },
    { size: '4" x 13m', color: 'Orange', grit: 'U5', unit_pack_qty: '300', price_rs_pc: '69' },
    { size: '4" x 13m', color: 'Orange', grit: 'U8', unit_pack_qty: '300', price_rs_pc: '73' },
    { size: '4" x 15m', color: 'Orange', grit: 'U3', unit_pack_qty: '300', price_rs_pc: '73' },
    { size: '4" x 15m', color: 'Orange', grit: 'U5', unit_pack_qty: '300', price_rs_pc: '78' },
    { size: '4" x 15m', color: 'Orange', grit: 'U8', unit_pack_qty: '300', price_rs_pc: '81' },
    { size: '6" x 1"', color: 'Maroon', grit: 'U0', unit_pack_qty: '80', price_rs_pc: '167' },
    { size: '6" x 1"', color: 'Maroon', grit: 'U1', unit_pack_qty: '80', price_rs_pc: '188' },
    { size: '6" x 1"', color: 'Maroon', grit: 'U3', unit_pack_qty: '80', price_rs_pc: '230' },
    { size: '6" x 1"', color: 'Maroon', grit: 'U5', unit_pack_qty: '80', price_rs_pc: '272' },
    { size: '6" x 2"', color: 'Maroon', grit: 'U0', unit_pack_qty: '40', price_rs_pc: '232' },
    { size: '6" x 2"', color: 'Maroon', grit: 'U1', unit_pack_qty: '40', price_rs_pc: '309' },
    { size: '6" x 2"', color: 'Maroon', grit: 'U3', unit_pack_qty: '40', price_rs_pc: '367' },
    { size: '6" x 2"', color: 'Maroon', grit: 'U5', unit_pack_qty: '40', price_rs_pc: '444' },
    { size: '6" x 2"', color: 'Maroon', grit: 'U8', unit_pack_qty: '40', price_rs_pc: '523' },
    { size: '6" x 2"', color: 'Maroon', grit: 'U00', unit_pack_qty: '40', price_rs_pc: '577' },
    { size: '8" x 1"', color: 'Maroon', grit: 'U000', unit_pack_qty: '80', price_rs_pc: '216' },
    { size: '8" x 1"', color: 'Maroon', grit: 'U00', unit_pack_qty: '80', price_rs_pc: '242' },
    { size: '8" x 1"', color: 'Maroon', grit: 'U0', unit_pack_qty: '80', price_rs_pc: '288' },
    { size: '8" x 1"', color: 'Maroon', grit: 'U1', unit_pack_qty: '80', price_rs_pc: '328' },
    { size: '8" x 1"', color: 'Maroon', grit: 'U3', unit_pack_qty: '80', price_rs_pc: '411' },
    { size: '8" x 1"', color: 'Maroon', grit: 'U5', unit_pack_qty: '80', price_rs_pc: '487' },
    { size: '8" x 1"', color: 'Maroon', grit: 'U8', unit_pack_qty: '80', price_rs_pc: '563' },
    { size: '8" x 2"', color: 'Maroon', grit: 'U000', unit_pack_qty: '40', price_rs_pc: '458' },
    { size: '8" x 2"', color: 'Maroon', grit: 'U00', unit_pack_qty: '40', price_rs_pc: '484' },
    { size: '8" x 2"', color: 'Maroon', grit: 'U0', unit_pack_qty: '40', price_rs_pc: '563' },
    { size: '8" x 2"', color: 'Maroon', grit: 'U1', unit_pack_qty: '40', price_rs_pc: '578' },
    { size: '8" x 2"', color: 'Maroon', grit: 'U3', unit_pack_qty: '40', price_rs_pc: '792' },
    { size: '8" x 2"', color: 'Maroon', grit: 'U5', unit_pack_qty: '40', price_rs_pc: '792' },

    { size: '10" x 2"', color: 'Maroon', grit: 'U000', unit_pack_qty: '20', price_rs_pc: '690' },
    { size: '10" x 2"', color: 'Maroon', grit: 'U00', unit_pack_qty: '20', price_rs_pc: '834' },
    { size: '10" x 2"', color: 'Maroon', grit: 'U0', unit_pack_qty: '20', price_rs_pc: '985' },
    { size: '10" x 2"', color: 'Maroon', grit: 'U1', unit_pack_qty: '20', price_rs_pc: '1107' },
    { size: '10" x 2"', color: 'Maroon', grit: 'U3', unit_pack_qty: '20', price_rs_pc: '1236' },

    { size: '12" x 2"', color: 'Maroon', grit: 'U1', unit_pack_qty: '10', price_rs_pc: '1370' },
    { size: '12" x 2"', color: 'Maroon', grit: 'U5', unit_pack_qty: '10', price_rs_pc: '2160' },

    { size: '14" x 2"', color: 'Maroon', grit: 'U3', unit_pack_qty: '5', price_rs_pc: '2566' },
    { size: '14" x 2"', color: 'Maroon', grit: 'U5', unit_pack_qty: '5', price_rs_pc: '3358' }
  ]
}
     ]
    },
    'diamond-saw-blade': {
      name: 'MARBLE CUTTING BLADE',
      description: 'These blades are designed for rapidly cutting marbles. Available Size: 4", 4 ½", 5", 6" and 7". These blades are designed for rapidly cutting of granite, marbles, concrete etc. Available Size: 4"',
      image: diamond_saw_blade,
      applications: [
        'Pneumatic Tool Connections',
        'Air Line Assembly',
        'Cylinder Connections',
        'Valve Manifolds',
        'Control Panel Plumbing',
        'Machine Tool Applications'
      ],
      additionalProducts: [],
      tables: [
{
  title: 'Marble Cutting Blade',
  data: [
    { size: '110 mm x 9 mm x 20 mm - 4"', type: 'Segmented', price_rs_pc: '155', unit_pack_qty: '10', master_cartoon_qty: '200' },
    { size: '110 mm x 7 mm x 20 mm - 4"', type: 'Turbo', price_rs_pc: '179', unit_pack_qty: '10', master_cartoon_qty: '200' },
    { size: '110 mm x 9 mm x 20 mm - 4"', type: 'Continuous Rim', price_rs_pc: '179', unit_pack_qty: '10', master_cartoon_qty: '200' },
    { size: '115 mm x 9 mm x 22.23 mm', type: 'Segmented', price_rs_pc: '180', unit_pack_qty: '10', master_cartoon_qty: '200' },
    { size: '125 mm x 9 mm x 20 mm', type: 'Segmented', price_rs_pc: '194', unit_pack_qty: '10', master_cartoon_qty: '200' },
    { size: '150 mm x 9 mm x 22.23 mm', type: 'Segmented', price_rs_pc: '260', unit_pack_qty: '10', master_cartoon_qty: '200' },
    { size: '180 mm x 10 mm x 22.23 mm', type: 'Segmented', price_rs_pc: '403', unit_pack_qty: '10', master_cartoon_qty: '200' }
  ]
}

     ]
    },
    'tct-circular-saw': {
      name: 'TCT CUTTER FOR WOOD',
      description: 'These blades are designed for cutting normal and standard wood series and all types of aluminum pipes, rods, sections and angle channels. Available Size for wood 4" (110mm) to 14" (350mm) Available Size for aluminium 7" (180mm) to 14" (350mm)',
      image: tct_circular_cutter,
      applications: [
        'Pneumatic Tool Connections',
        'Air Line Assembly',
        'Cylinder Connections',
        'Valve Manifolds',
        'Control Panel Plumbing',
        'Machine Tool Applications'
      ],
      additionalProducts: [],
      tables: [
{
  title: 'TCT Saw Blades',
  data: [
    { diameter: '250 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '60', metal_rs_pc: '8400', hard_material_rs_pc: '9700', stainless_rs_pc: '9700' },
    { diameter: '250 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '72', metal_rs_pc: '8600', hard_material_rs_pc: '9900', stainless_rs_pc: '9900' },
    { diameter: '250 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '80', metal_rs_pc: '9500', hard_material_rs_pc: '10900', stainless_rs_pc: '10900' },
    { diameter: '250 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '100', metal_rs_pc: '10600', hard_material_rs_pc: '12000', stainless_rs_pc: '12000' },

    { diameter: '285 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '60', metal_rs_pc: '8400', hard_material_rs_pc: '9700', stainless_rs_pc: '9700' },
    { diameter: '285 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '72', metal_rs_pc: '9200', hard_material_rs_pc: '10500', stainless_rs_pc: '10500' },
    { diameter: '285 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '80', metal_rs_pc: '9700', hard_material_rs_pc: '12000', stainless_rs_pc: '12000' },
    { diameter: '285 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '100', metal_rs_pc: '11200', hard_material_rs_pc: '13000', stainless_rs_pc: '13000' },
    { diameter: '285 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '120', metal_rs_pc: '13000', hard_material_rs_pc: '15000', stainless_rs_pc: '15000' },

    { diameter: '315 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '60', metal_rs_pc: '10300', hard_material_rs_pc: '11000', stainless_rs_pc: '11000' },
    { diameter: '315 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '72', metal_rs_pc: '11000', hard_material_rs_pc: '11500', stainless_rs_pc: '11500' },
    { diameter: '315 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '80', metal_rs_pc: '11600', hard_material_rs_pc: '12000', stainless_rs_pc: '12000' },
    { diameter: '315 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '100', metal_rs_pc: '12300', hard_material_rs_pc: '14000', stainless_rs_pc: '14000' },
    { diameter: '315 mm', bore: '32 mm', kerf: '2.0 mm', body: '1.7 mm', pin_hole_distance: '(4-11-63, 4-9-50)', teeth: '120', metal_rs_pc: '15000', hard_material_rs_pc: '17000', stainless_rs_pc: '17000' },

    { diameter: '360 mm', bore: '40 mm', kerf: '2.6 mm', body: '2.25 mm', pin_hole_distance: '(4-11-90, 4-16-80)', teeth: '60', metal_rs_pc: '12400', hard_material_rs_pc: '13000', stainless_rs_pc: '13000' },
    { diameter: '360 mm', bore: '40 mm', kerf: '2.6 mm', body: '2.25 mm', pin_hole_distance: '(4-11-90, 4-16-80)', teeth: '72', metal_rs_pc: '12000', hard_material_rs_pc: '14000', stainless_rs_pc: '14000' },
    { diameter: '360 mm', bore: '40 mm', kerf: '2.6 mm', body: '2.25 mm', pin_hole_distance: '(4-11-90, 4-16-80)', teeth: '80', metal_rs_pc: '13500', hard_material_rs_pc: '15500', stainless_rs_pc: '15500' },
    { diameter: '360 mm', bore: '40 mm', kerf: '2.6 mm', body: '2.25 mm', pin_hole_distance: '(4-11-90, 4-16-80)', teeth: '100', metal_rs_pc: '16000', hard_material_rs_pc: '18500', stainless_rs_pc: '18500' },

    { diameter: '425 mm', bore: '50 mm', kerf: '2.7 mm', body: '2.25 mm', pin_hole_distance: '(4-12-90, 4-16-80)', teeth: '60', metal_rs_pc: '12600', hard_material_rs_pc: '14500', stainless_rs_pc: '14500' },
    { diameter: '425 mm', bore: '50 mm', kerf: '2.7 mm', body: '2.25 mm', pin_hole_distance: '(4-12-90, 4-16-80)', teeth: '72', metal_rs_pc: '14000', hard_material_rs_pc: '16000', stainless_rs_pc: '16000' },
    { diameter: '425 mm', bore: '50 mm', kerf: '2.7 mm', body: '2.25 mm', pin_hole_distance: '(4-12-90, 4-16-80)', teeth: '80', metal_rs_pc: '16000', hard_material_rs_pc: '18500', stainless_rs_pc: '18500' },

    { diameter: '460 mm', bore: '50 mm', kerf: '2.7 mm', body: '2.25 mm', pin_hole_distance: '(4-12-90, 4-16-80)', teeth: '60', metal_rs_pc: '14000', hard_material_rs_pc: '16000', stainless_rs_pc: '16000' },
    { diameter: '460 mm', bore: '50 mm', kerf: '2.7 mm', body: '2.25 mm', pin_hole_distance: '(4-12-90, 4-16-80)', teeth: '72', metal_rs_pc: '16000', hard_material_rs_pc: '18500', stainless_rs_pc: '18500' },
    { diameter: '460 mm', bore: '50 mm', kerf: '2.7 mm', body: '2.25 mm', pin_hole_distance: '(4-12-90, 4-16-80)', teeth: '80', metal_rs_pc: '17500', hard_material_rs_pc: '20000', stainless_rs_pc: '20000' }
  ]
}



     ]
    },
  };

  if (!productId || !productData[productId]) {
    return <Navigate to="/bipico-products" replace />;
  }

  const product = productData[productId];

  const handleGetQuote = (productName: string, productImage: string) => {
    setSelectedProduct({ name: productName, image: productImage });
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - BIPICO | Garv Enterprises</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, BIPICO, cutting tools, grinding tools, industrial abrasives, Garv Enterprises`} />
      </Helmet>

      <div className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
          >
            <Link
              to="/bipico-products"
              className="flex items-center hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              BIPICO Products
            </Link>
            <span>/</span>
            <span className="text-orange-300 font-medium">{product.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="relative w-full h-0 pb-[75%] sm:pb-[66.67%] lg:pb-[75%] rounded-xl overflow-hidden shadow-2xl bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-contain p-4"
                />
              </div>
            </motion.div>

            {/* Product Details */}     
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-primary-orange  mr-3" />
                <span className="text-lg font-semibold text-primary-orange ">BIPICO</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-gray-700 mb-6 leading-relaxed text-base lg:text-lg">
                {product.description}
              </p>

              {/* Action Buttons - Horizontal on all screens */}
              <div className="flex flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => handleGetQuote(product.name, product.image)}
                  className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base  transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Package className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                  Get Quote
                </button>
                <Link
                  to="/contact"
                  className="flex-1 border-2 border-orange-600 text-primary-orange  py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2" />
                  <span className="hidden xs:inline">Contact Sales</span>
                  <span className="inline xs:hidden">Contact</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Additional Products Section */}
          {product.additionalProducts && product.additionalProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Additional Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.additionalProducts.map((additionalProduct, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative w-full h-0 pb-[66.67%] bg-gradient-to-br from-orange-50 to-red-50">
                      <img
                        src={additionalProduct.image}
                        alt={additionalProduct.name}
                        className="absolute top-0 left-0 w-full h-full object-contain p-4"
                      />
                    </div>

                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{additionalProduct.name}</h4>
                      <div className="space-y-2">
                        {additionalProduct.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => handleGetQuote(additionalProduct.name, additionalProduct.image)}
                        className="mt-4 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-medium hover:from-orange-400 hover:to-red-400 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tables Section */}
          {product.tables && product.tables.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={product.tables.length === 2 ? "grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6" : "space-y-12"}
            >
              {product.tables.map((table, tableIndex) => (
                <div key={tableIndex} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col">
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 lg:p-5">
                    <h3 className="text-base lg:text-lg font-bold">{table.title}</h3>
                  </div>
                  <div className="overflow-x-auto flex-1">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-orange-50 to-red-50">
                        <tr>
                          {Object.keys(table.data[0]).map((header, headerIndex) => (
                            <th key={headerIndex} className="px-3 lg:px-4 py-2.5 lg:py-3 text-left text-xs lg:text-sm font-semibold text-gray-900 capitalize border-b-2 border-orange-200">
                              {header.replace(/_/g, ' ')}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {table.data.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-orange-50 transition-colors">
                            {Object.values(row).map((value, cellIndex) => (
                              <td key={cellIndex} className="px-3 lg:px-4 py-2.5 lg:py-3 text-xs lg:text-sm text-gray-700 align-top">
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setSelectedProduct(null);
        }}
        productName={selectedProduct?.name}
        productCategory="BIPICO"
        productImage={selectedProduct?.image}
      />
    </>
  );
};

export default BipicoProductDetailPage;


