import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Package, Settings, ShoppingCart, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteModal from '../components/common/QuoteModal';
import way_wall from "../assets/uflow/3_way_wall.png"
import angle_seat_valve from "../assets/uflow/angle_seat_valve_1.png"
import ball_valve from "../assets/uflow/ball_valve.png"
import butterfly_valve from "../assets/uflow/butterfly.png"
import pneumatic_valve from "../assets/uflow/pneumatic_valve.png"
import poppet_valve from "../assets/uflow/poppet_valve.png"
import plastic_tubing from "../assets/uflow/plastic_tubing.png"
import air_filter from "../assets/uflow/air_filter.png"
import one_touch_fitting from "../assets/uflow/one_touch_fitting.png"
import solenoid_valve from "../assets/uflow/solenoid_valve.png"

const UflowProductDetailPage = () => {
  const { productId } = useParams();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);

  const productData = {
    'pneumatic-valve': {
      name: 'PNEUMATIC VALVE',
      description: 'Our pneumatic valves provide reliable control of air flow in industrial automation and machinery applications. Built from high-quality materials, these valves ensure quick response, minimal air leakage, and long service life. Ideal for use in manufacturing, packaging, and process industries, they offer smooth operation and consistent performance under high pressure and demanding conditions.',
      image: pneumatic_valve,
      applications: [],
      additionalProducts: [],
      tables: [
        {
          title: 'Service Specifications',
          data: [
            {
              model: 'DCC-F1V1',
              flow: '1200 LPM',
              pressure: '6 Bar',
              portIn: '¼"',
              portOut: '¼"',
              portExh: '¹⁄₈"',
              function: 'Center Blocked',
              symbol: '4 5 1 3 2'
            },
            {
              model: 'DCC-G1V1',
              flow: '1200 LPM',
              pressure: '6 Bar',
              portIn: '¼"',
              portOut: '¼"',
              portExh: '¹⁄₈"',
              function: 'Center Exhausted',
              symbol: '4 5 1 3 2'
            },
            {
              model: 'DCC-H1V1',
              flow: '1200 LPM',
              pressure: '6 Bar',
              portIn: '¼"',
              portOut: '¼"',
              portExh: '¹⁄₈"',
              function: 'Center Pressurised',
              symbol: '4 5 1 3 2'
            },
            {
              model: 'DCC-F2V1',
              flow: '3500 LPM',
              pressure: '6 Bar',
              portIn: '½"',
              portOut: '½"',
              portExh: '½"',
              function: 'Center Blocked',
              symbol: '4 5 1 3 2'
            },
            {
              model: 'DCC-G2V1',
              flow: '3500 LPM',
              pressure: '6 Bar',
              portIn: '½"',
              portOut: '½"',
              portExh: '½"',
              function: 'Center Exhausted',
              symbol: '4 5 1 3 2'
            },
            {
              model: 'DCC-H2V1',
              flow: '3500 LPM',
              pressure: '6 Bar',
              portIn: '½"',
              portOut: '½"',
              portExh: '½"',
              function: 'Center Pressurised',
              symbol: '4 5 1 3 2'
            }
          ]
        },
        {
          title: 'Modal Information',
          data: [
            { standard: 'Type', certification: 'Solenoid Operated, Lever Operated, Pilot Air Operated, Push Pull (3X2-NC / NO, 5X2, 5X3)' },
            { standard: 'Design', certification: 'Spool Type & Cartridge Type (DCC Series)' },
            { standard: 'Media', certification: 'Compressed Air (Filtered & Lubricated)' },
            { standard: 'Working Pressure Range', certification: '2 - 10 Bar for Solenoid Valve, 0 - 10 Bar for Manual Valve & Air Pilot Valve' },
            { standard: 'Ambient / Media Temperature', certification: '5°C - 60°C' },
            { standard: 'Materials of Construction', certification: 'Aluminium, Nitrile, Brass, Polymer' }
          ]
        },
        {
          title: 'Coil Information',
          data: [
            { standard: 'Coil Width', certification: '26 mm' },
            { standard: 'Coil Bore', certification: '10 mm' },
            { standard: 'Voltage (V) ± 10%', certification: 'AC (50Hz, 60Hz) - 24V, 110V, 230V | DC 12V, 24V, 36V, 48V, 110V' },
            { standard: 'Power Consumption', certification: 'AC-6W, DC-6W' },
            { standard: 'Duty Cycle', certification: 'Continuous' },
            { standard: 'Type of Coil Protection', certification: 'IP65' },
            { standard: 'Class of Insulation', certification: 'Class H' },
            { standard: 'Coil Housing', certification: 'Epoxy Square Coil' }
          ]
        }
      ]
    },
        'air-filter': {
      name: 'AIR FILTER-PD SERIES  ',
      description: 'This air filter effectively removes dust, oil mist, and moisture from compressed air, protecting your pneumatic components from damage and ensuring efficient operation. Designed for durability and easy maintenance, it guarantees longer equipment life and improved system reliability. Ideal for workshops, industrial plants, and automation setups',
      image: air_filter,
      applications: [
        'Pneumatic Cylinder Mounting',
        'Industrial Automation Equipment',
        'Assembly Line Fixtures',
        'Robotic System Integration',
        'Material Handling Systems',
        'Packaging Equipment'
      ],
      additionalProducts: [
        
      ],
      tables: [
{
  title: 'Service Specifications',
  data: [
    { parameter: 'Model No.', value: 'PD-R1 / PD-R7 / PD-R2 / PD-R3 / PD-R4' },
    { parameter: 'Media', value: 'Compressed air - Filtered' },
    { parameter: 'Port Size', value: 'G¼ / G⅜ / G½ / G¾ / G1' },
    { parameter: 'Pressure Gauge Port Size', value: 'G⅛ / G¼' },
    { parameter: 'Flow Rate LPM*', value: '600 / 2500 / 4000 / 5000 / 6000' },
    { parameter: 'Maximum Supply Pressure', value: '15 Bar' },
    { parameter: 'Regulating Pressure Range', value: '0.2-2, 0.2-4, 0.5-7, 0.5-12' },
    { parameter: 'Media Temperature', value: '+5°C to +50°C' },
    { parameter: 'Ambient Temperature', value: '-10°C to +60°C' },
    { parameter: 'Installation', value: 'Any Position' },
    { parameter: 'Materials of Construction', value: 'Aluminium, Brass, Steel, Acetal, SS, Nitrile' },
    { parameter: 'Optional Accessories', value: 'Clamp, Modular mounting kit, Pressure Gauge' }
  ]
},
     {
  title: 'Dimensional Specifications',
  data: [
    { parameter: 'Diagram No.', value: '1.2' },
    { parameter: 'Model Numbers', value: 'PD-R1, PD-R7, PD-R2, PD-R3, PD-R4' },
    { parameter: 'W', value: '¼", ⅜", ½", ¾", 1"' },
    { parameter: 'V', value: '⅛”, ¼”' },
    { parameter: 'A', value: '40, 55, 70, 90' },
    { parameter: 'B', value: '81, 135, 164, 177' },
    { parameter: 'E', value: '13, 40, 40, 48' },
    { parameter: 'F', value: '30, 40, 50, 70' },
    { parameter: 'ØG', value: '25, 40, 47, 51' },
    { parameter: 'J', value: '28, 40, 55, 66' },
    { parameter: 'K', value: '45, 53, 62, 65' },
    { parameter: 'L', value: '5.5, 6.5, 8.5, 11' },
    { parameter: 'T', value: '2, 5' },
    { parameter: 'ØM', value: '30.5, 43, 53' }
  ]
}


      ]
    },
    'one-touch-fitting': {
      name: 'ONE TOUCH FITTING ',
      description: 'Our one-touch fittings are engineered for quick installation and reliable sealing in pneumatic systems. Made from corrosion-resistant materials, these fittings ensure a leak-free connection for air tubing and simplify maintenance and assembly. They are available in various sizes and configurations to suit all types of industrial and automation needs.',
      image: one_touch_fitting,
      applications: [
        'Pneumatic cylinders (all types)',
        'All compressed air lines, machinery of all kinds wherever pneumatic systems are used',
        'Directional control valves(DCV), solenoid valves(SOV) and other valves',
        'Pneumatic control & circuit panels',
        'Air preparation units like filter, regulator and lubricators(FRL)',
            ],
      additionalProducts: [],
      tables: [
       {
  title: 'Technical Specifications',
  data: [
    { parameter: 'Media', value: 'Air' },
    { parameter: 'Max. Operating Pressure', value: '10 Bar' },
    { parameter: 'Ambient Temperature', value: '-10°C to +60°C' },
    { parameter: 'Threaded Connection', value: 'Male: R - Taper thread, Female: G - Parallel thread' },
    { parameter: 'Media Temperature', value: '+5°C to +50°C' },
    { parameter: 'Applicable Tube Material', value: 'Nylon, Polyurethane' },
    { parameter: 'Applicable Tube Size (OD)', value: 'Ø4, Ø6, Ø8, Ø10, Ø12, Ø14, Ø16' },
    { parameter: 'Recommended Tolerance for Tube OD', value: '±0.1 mm' }
  ]
},
       
      ]
    },
    'plastic-tubing': {
      name: 'PLASTIC TUBING ',
      description: 'This high-quality plastic tubing is designed to withstand pressure and abrasion, making it ideal for pneumatic and fluid transport systems. Its flexibility and chemical resistance ensure long-term performance in harsh industrial environments. Available in multiple diameters and colors for easy identification and installation.',
      image: plastic_tubing,
      applications: [
      ],
      additionalProducts: [],
      tables: [
        {
  title: 'PU Tube Specifications',
  columns: ['Tube OD / Tube ID / Min Bend Radius', 'Blue', 'Black', 'Red', 'Yellow', 'Silver', 'Transparent'],
  data: [
    { 'Tube OD / Tube ID / Min Bend Radius': '4 / 2 / 10 mm', Blue: 'PU-0402', Black: 'PU-0402K', Red: 'PU-0402R', Yellow: 'PU-0402Y', Silver: 'PU-0402S', Transparent: 'PU-0402T' },
    { 'Tube OD / Tube ID / Min Bend Radius': '6 / 4 / 15 mm', Blue: 'PU-0604', Black: 'PU-0604K', Red: 'PU-0604R', Yellow: 'PU-0604Y', Silver: 'PU-0604S', Transparent: 'PU-0604T' },
    { 'Tube OD / Tube ID / Min Bend Radius': '8 / 5 / 25 mm', Blue: 'PU-0805', Black: 'PU-0805K', Red: 'PU-0805R', Yellow: 'PU-0805Y', Silver: 'PU-0805S', Transparent: 'PU-0805T' },
    { 'Tube OD / Tube ID / Min Bend Radius': '10 / 7 / 30 mm', Blue: 'PU-1007', Black: 'PU-1007K', Red: 'PU-1007R', Yellow: 'PU-1007Y', Silver: 'PU-1007S', Transparent: 'PU-1007T' },
    { 'Tube OD / Tube ID / Min Bend Radius': '12 / 8 / 35 mm', Blue: 'PU-1208', Black: 'PU-1208K', Red: 'PU-1208R', Yellow: 'PU-1208Y', Silver: 'PU-1208S', Transparent: 'PU-1208T' },
    { 'Tube OD / Tube ID / Min Bend Radius': '14 / 10 / 130 mm', Blue: 'PU-1410', Black: 'PU-1410K', Red: 'PU-1410R', Yellow: 'PU-1410Y', Silver: 'PU-1410S', Transparent: 'PU-1410T' },
    { 'Tube OD / Tube ID / Min Bend Radius': '16 / 11 / 140 mm', Blue: 'PU-1611', Black: 'PU-1611K', Red: 'PU-1611R', Yellow: 'PU-1611Y', Silver: 'PU-1611S', Transparent: 'PU-1611T' }
  ]
},
{
  title: 'N6 Tube Specifications',
  columns: ['Tube OD', 'Tube ID', 'Minimum Bend Radius (mm)', 'Blue', 'Black', 'Red', 'Yellow', 'Silver', 'Transparent'],
  data: [
    { 'Tube OD': '4', 'Tube ID': '2', 'Minimum Bend Radius (mm)': '20', Blue: 'N6-0402', Black: 'N6-0402K', Red: 'N6-0402R', Yellow: 'N6-0402Y', Silver: 'N6-0402S', Transparent: 'N6-0402T' },
    { 'Tube OD': '6', 'Tube ID': '4', 'Minimum Bend Radius (mm)': '40', Blue: 'N6-0604', Black: 'N6-0604K', Red: 'N6-0604R', Yellow: 'N6-0604Y', Silver: 'N6-0604S', Transparent: 'N6-0604T' },
    { 'Tube OD': '8', 'Tube ID': '6', 'Minimum Bend Radius (mm)': '50', Blue: 'N6-0806', Black: 'N6-0806K', Red: 'N6-0806R', Yellow: 'N6-0806Y', Silver: 'N6-0806S', Transparent: 'N6-0806T' },
    { 'Tube OD': '10', 'Tube ID': '8', 'Minimum Bend Radius (mm)': '60', Blue: 'N6-1008', Black: 'N6-1008K', Red: 'N6-1008R', Yellow: 'N6-1008Y', Silver: 'N6-1008S', Transparent: 'N6-1008T' },
    { 'Tube OD': '12', 'Tube ID': '10', 'Minimum Bend Radius (mm)': '80', Blue: 'N6-1210', Black: 'N6-1210K', Red: 'N6-1210R', Yellow: 'N6-1210Y', Silver: 'N6-1210S', Transparent: 'N6-1210T' },
    { 'Tube OD': '14', 'Tube ID': '12', 'Minimum Bend Radius (mm)': '100', Blue: 'N6-1412', Black: 'N6-1412K', Red: 'N6-1412R', Yellow: 'N6-1412Y', Silver: 'N6-1412S', Transparent: 'N6-1412T' }
  ]
}
      ]
    },
    'poppet-valve': {
      name: 'POPPET VALVE ',
      description: 'Our poppet valves deliver fast response and high flow capacity, making them perfect for pneumatic control systems. With a simple yet durable design, they minimize pressure drop and offer long-lasting performance. Suitable for use in automation machinery, manufacturing lines, and air-operated tools.',
      image: poppet_valve,
      applications: [
        'Pneumatic Control Systems',
        'Air Tool Regulation',
        'Process Control Equipment',
        'Automated Manufacturing',
        'Testing and Calibration',
        'Quality Control Systems'
      ],
      additionalProducts: [],
      tables: [
        {
  title: 'Valve Technical Specifications',
  data: [
    { parameter: 'Type', value: '3/2' },
    { parameter: 'Design', value: 'Internal Pilot Operated Poppet Valve' },
    { parameter: 'Port Size', value: 'In / Out / Exhaust – ¼" BSP (Available in NPT)' },
    { parameter: 'Media', value: 'Compressed Air (Filtered & Lubricated)' },
    { parameter: 'Working Pressure Range', value: '2–10 Bar' },
    { parameter: 'Orifice', value: '7mm' },
    { parameter: 'Flow Factor', value: '18 kv (LPM of Water @ 1 bar ΔP)' },
    { parameter: 'Ambient / Media Temperature', value: '5°C – 60°C' },
    { parameter: 'Materials of Construction', value: 'Aluminium, Nitrile, Polymer, Brass' }
  ]
},
       {
  title: 'Coil Specifications',
  data: [
    { parameter: 'Operating Voltage', value: '24V AC, 110V AC, 230V AC, 12V DC, 24V DC' },
    { parameter: 'Power Consumption', value: '9W, 9W, 9W, 10W, 11W' },
    { parameter: 'Coil Features', value: 'High reliability unaffected by voltage surges. Easy coil changes; coil lockable in 4×90° positions or freely movable as required.' },
    { parameter: 'Coil Housing', value: 'IP65 Epoxy square coil, IP65 Metallic round enclosure, IP67 Flameproof junction box, IP68 Weatherproof enclosure.' }
  ]
}

      ]
    },
    'solenoid-valve': {
      name: 'SOLENOID VALVE ',
      description: 'The solenoid valve uses an electromagnetic coil to control air or fluid flow automatically. It provides excellent response time and is ideal for integration into automated systems, including pneumatic and hydraulic applications. Built with robust materials, it ensures reliable operation even in harsh industrial conditions.',
      image: solenoid_valve,
      applications: [
        'Pneumatic Tool Lubrication',
        'Cylinder Lubrication',
        'Valve Lubrication Systems',
        'Air Motor Applications',
        'Rotary Actuator Systems',
        'High-Speed Pneumatic Equipment'
      ],
      additionalProducts: [],
      tables: [
        {
          title: 'Lubrication Features',
          data: [
            { feature: 'Oil Injection Method', specification: 'Automatic Venturi System' },
            { feature: 'Drop Rate Adjustment', specification: '1-60 drops/minute' },
            { feature: 'Oil Capacity', specification: '100ml Transparent Bowl' },
            { feature: 'Oil Type Compatibility', specification: 'ISO VG 32 Pneumatic Oil' },
            { feature: 'Operating Pressure', specification: '0.1 - 1.0 MPa' },
            { feature: 'Flow Rate', specification: 'Up to 1500 L/min' }
          ]
        },
        {
          title: 'Oil Specifications',
          data: [
            { oil_type: 'Standard Pneumatic Oil', viscosity: 'ISO VG 32', temperature: '-10°C to +60°C' },
            { oil_type: 'High Temperature Oil', viscosity: 'ISO VG 46', temperature: '-5°C to +80°C' },
            { oil_type: 'Low Temperature Oil', viscosity: 'ISO VG 22', temperature: '-20°C to +50°C' },
            { oil_type: 'Food Grade Oil', viscosity: 'ISO VG 32', temperature: '0°C to +60°C' },
            { oil_type: 'Synthetic Oil', viscosity: 'ISO VG 32', temperature: '-30°C to +100°C' }
          ]
        }
      ]
    },
    'angle-seat-valve': {
      name: 'ANGLE SEAT VALVE',
      description: 'The angle seat valve is engineered for controlling steam, air, water, and aggressive fluids in demanding applications. Its robust stainless-steel construction ensures durability, while the pneumatic actuator provides fast switching and tight sealing. Commonly used in chemical processing, food, and pharmaceutical industries for efficient flow control.',
      image: angle_seat_valve,
      applications: [
        'High Pressure Pneumatic Systems',
        'Industrial Compressor Systems',
        'Hydraulic-Pneumatic Conversion',
        'Testing and Calibration Equipment',
        'Research and Development',
        'Specialized Manufacturing Processes'
      ],
      additionalProducts: [],
      tables: [
       {
  title: 'Specification',
  data: [
    { parameter: 'Port', value: '½", ¾", 1", 1¼", 1½", 2" & 2½" (Available in BSP / NPT)' },
    { parameter: 'End Connection', value: 'Screwed / Flange / Tri-Clamp / Socket Weld' },
    { parameter: 'Body & Sleeve Material', value: 'SS ASTM A351 Grade CF8 / CF8M / CF3M' },
    { parameter: 'Seal', value: 'PTFE / PEEK / VITON' },
    { parameter: 'Shaft', value: 'SS304 / SS316' },
    { parameter: 'Circumstance Temp', value: '-10°C to 70°C' },
    { parameter: 'Media Temp', value: '-10°C to 180°C' },
    { parameter: 'Other Specification Data', value: 'Available on request: Adjust Stroke Limiter, Position Sensor' }
  ]
},
        {
  title: 'Actuator Specifications',
  data: [
    { parameter: 'Actuator Type', value: 'Cover: Nylon Glass-Filled (Corrosion resistive) with SS Liner' },
    { parameter: 'Seal', value: 'NBR / VITON' },
    { parameter: 'Working Pressure', value: 'Refer Below Pressure Chart Table' },
    { parameter: 'Life', value: 'Three Million Cycle Tested' },
    { parameter: 'Other Technical Data', value: 'Available on Request' }
  ]
}

      ]
    },
    '3-way-control-valve': {
      name: '3 WAY CONTROL VALVE (NC / NO) ',
      description: 'Our 3-way control valves are designed to manage the flow of air or liquids between three ports, allowing easy switching or mixing of media. Ideal for pneumatic and hydraulic systems, they provide accurate control, minimal leakage, and long service life. Perfect for industrial automation, process control, and instrumentation setups.',
      image: way_wall,
      applications: [
        'Pneumatic Tube Connections',
        'Quick Assembly Systems',
        'Maintenance Applications',
        'Portable Equipment',
        'Laboratory Setups',
        'Field Service Applications'
      ],
      additionalProducts: [],
      tables: [
       {
  title: 'Valve Specifications',
  data: [
    { parameter: 'Port', value: 'Refer below technical data sheet (Available BSP / NPT)' },
    { parameter: 'End Connection', value: 'Screw End' },
    { parameter: 'Body Material', value: 'SS ASTM A351 Grade CF8' },
    { parameter: 'Seal', value: 'PTFE / VITON' },
    { parameter: 'Circumstance Temp', value: '-10°C to 70°C' },
    { parameter: 'Media Temp', value: '-10°C to 180°C' },
    { parameter: 'Media', value: 'Steam, Air, Water, Chemical, Gases, Oil, Diesel, Hot Water' },
    { parameter: 'Leakage', value: 'As per ANSI B16.104 - 1976 Teflon seating class IV. For other soft seating class VI Drop Tight/Bubble Tight.' },
    { parameter: 'Stem Packing', value: 'Self adjusting, Spring loaded Teflon packing.' },
    { parameter: 'Air Quality', value: 'Lubricated / Non-lubricated.' }
  ]
},
{
  title: 'Actuator (Spring Return) Type',
  data: [
    { parameter: 'Cover', value: 'CF8' },
    { parameter: 'Plate', value: 'CF8' },
    { parameter: 'Working Pressure', value: '4.5 to 7 bar air (Not recommended actuator for pneumatic pressure above 7 bar)' },
    { parameter: 'Seal Material', value: 'NBR / VITON' },
    { parameter: 'Life', value: '1 million cycle' },
    { parameter: 'Other Technical Data', value: 'Available on request' }
  ]
}

      ]
    },
    'ball-valve': {
      name: 'BALL VALVE',
      description: 'This ball valve offers easy operation with a quarter-turn mechanism, ensuring a tight shutoff and smooth flow control. Made from corrosion-resistant materials, it’s suitable for water, air, gas, and oil applications. Its robust design guarantees durability and reliability in industrial, plumbing, and pneumatic systems.',
      image: ball_valve,
      applications: [
        'Pneumatic Air Lines',
        'Instrumentation Tubing',
        'Control System Connections',
        'Portable Equipment',
        'Laboratory Applications',
        'Medical Equipment Connections'
      ],
      additionalProducts: [],
      tables: [
{
  title: 'Specifications',
  data: [
    { parameter: 'Size', value: 'DN15 - DN100' },
    { parameter: 'End Connection', value: 'Screwed end (BSP / NPT), Socket Weld' },
    { parameter: 'Face to Face', value: 'MFG. Standard' },
    { parameter: 'Design Standard', value: 'ASME B16.11, ASME B16.34, API 598, BS EN ISO 17292, ISO 5211' },
    { parameter: 'Pressure Class', value: '150#, 300#' },
    { parameter: 'Body Material', value: 'CF8 / CF8M / WCB / CF3M' },
    { parameter: 'Pipe End Material', value: 'CF8 / CF8M / WCB / CF3M' },
    { parameter: 'Ball Material', value: 'CF8 / CF8M' },
    { parameter: 'Body Seal Material', value: 'PTFE / RPTFE / CFT / GFT / PEEK' },
    { parameter: 'Seat Ring Material', value: 'PTFE / RPTFE / CFT / GFT / PEEK' },
    { parameter: 'Fastener Material', value: 'SS304 / SS316' },
    { parameter: 'Stem Seal Material', value: 'PTFE / RPTFE / CFT / GFT / PEEK' },
    { parameter: 'Stem Material', value: 'SS304 / SS316 / SS410' },
    { parameter: 'Gland Bush Material', value: 'SS304 / SS316 / SS410' },
    { parameter: 'Gland Material', value: 'SS304 / SS316 / SS410' }
  ]
},
//  {
//           title: 'Size and Color Options',
//           data: [
//             { outer_diameter: '4mm', inner_diameter: '2.5mm', color_options: 'Blue, Red, Black, Clear' },
//             { outer_diameter: '6mm', inner_diameter: '4mm', color_options: 'Blue, Red, Black, Clear, Yellow' },
//             { outer_diameter: '8mm', inner_diameter: '5.5mm', color_options: 'Blue, Red, Black, Clear, Green' },
//             { outer_diameter: '10mm', inner_diameter: '7mm', color_options: 'Blue, Red, Black, Clear' },
//             { outer_diameter: '12mm', inner_diameter: '8mm', color_options: 'Blue, Red, Black, Clear' },
//             { outer_diameter: '16mm', inner_diameter: '12mm', color_options: 'Blue, Red, Black, Clear' }
//           ]
//         }
      ]
    },
    'butterfly-valve': {
      name: 'BUTTERFLY VALVE',
      description: 'Our butterfly valves are designed for quick shutoff and control of liquids, air, and gases. Featuring a compact design and durable body, they offer excellent flow capacity with minimal pressure loss. Commonly used in HVAC, water treatment, and process industries, these valves provide efficient operation and easy maintenance.',
      image: butterfly_valve,
      applications: [
        'Dual Input Selection Systems',
        'Safety Backup Systems',
        'Priority Control Circuits',
        'Emergency Override Systems',
        'Redundant Control Applications',
        'Fail-Safe Pneumatic Systems'
      ],
      additionalProducts: [],
      tables: [
        {
  title: 'Specifications',
  data: [
    { parameter: 'End Connection', value: 'Wafer - API 609 (CAT - A)' },
    { parameter: 'Size', value: 'DN40 - DN300' },
    { parameter: 'Suitable', value: 'ASME B16.5 150#' },
    { parameter: 'Pressure Range', value: 'PN06, PN10, PN16' },
    { parameter: 'Leakage Class', value: '100% Tightness at fully differential pressure' },
    { parameter: 'Standard', value: 'API 609, BS 5155, ISO 5211, API 598, ASME B16.5' },
    { parameter: 'Body Material', value: 'Cast Iron (CI), SGI, WCB, CF8, CF8M' },
    { parameter: 'Disc Material', value: 'SGI, CF8, CF8M, WCB' },
    { parameter: 'Stem Material', value: 'SS410, SS304, SS316' },
    { parameter: 'Body Liner / Seat Material', value: 'NBR, EPDM, VITON' },
    { parameter: 'Shaft Bearing Material', value: 'PTFE' }
  ]
},
        {
          title: 'Technical Specifications',
          data: [
            { specification: 'Body Material', value: 'Anodized Aluminum', standard: 'ISO 9001' },
            { specification: 'Seal Material', value: 'NBR O-Rings', standard: 'FDA Approved' },
            { specification: 'Operating Pressure', value: '0.1 - 1.0 MPa', standard: 'ISO 4414' },
            { specification: 'Port Size', value: '1/8" to 1/2" NPT', standard: 'ANSI B1.20.1' },
            { specification: 'Operating Temperature', value: '-10°C to +80°C', standard: 'ISO 4414' },
            { specification: 'Flow Coefficient', value: 'Cv = 0.8', standard: 'ISA Standard' }
          ]
        }
      ]
    }

  };

  if (!productId || !productData[productId]) {
    return <Navigate to="/uflow-products" replace />;
  }

  const product = productData[productId];

  const handleGetQuote = (productName: string, productImage: string) => {
    setSelectedProduct({ name: productName, image: productImage });
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - UFLOW | Garv Enterprises</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, UFLOW, pneumatic solutions, industrial automation, Garv Enterprises`} />
      </Helmet>

      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8"
          >
            <Link
              to="/uflow-products"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              UFLOW Products
            </Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">{product.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
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
                  className="absolute top-0 left-0 w-full h-full object-contain p-3 sm:p-4"
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
              <div className="flex items-center mb-3 sm:mb-4">
                <Settings className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600 mr-2 sm:mr-3" />
                <span className="text-base sm:text-lg font-semibold text-blue-600">UFLOW</span>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Action Buttons - Horizontal on all screens */}
              <div className="flex flex-row gap-2 sm:gap-3 lg:gap-4">
                <button
                  onClick={() => handleGetQuote(product.name, product.image)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-2.5 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-lg font-medium text-xs sm:text-sm lg:text-base hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-1 sm:mr-1.5 lg:mr-2" />
                  Get Quote
                </button>
                <Link
                  to="/contact"
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-2 sm:py-2.5 lg:py-3 px-3 sm:px-4 lg:px-6 rounded-lg font-medium text-xs sm:text-sm lg:text-base hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <ShoppingCart className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-1 sm:mr-1.5 lg:mr-2" />
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
              className="mb-12 sm:mb-16"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Additional Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {product.additionalProducts.map((additionalProduct, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative w-full h-0 pb-[66.67%] bg-gradient-to-br from-blue-50 to-indigo-50">
                      <img
                        src={additionalProduct.image}
                        alt={additionalProduct.name}
                        className="absolute top-0 left-0 w-full h-full object-contain p-4"
                      />
                    </div>
                    
                    <div className="p-4 sm:p-5">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{additionalProduct.name}</h4>
                      <div className="space-y-2">
                        {additionalProduct.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => handleGetQuote(additionalProduct.name, additionalProduct.image)}
                        className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium text-xs sm:text-sm hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
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
              className={product.tables.length === 2 ? "grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6" : "space-y-8 sm:space-y-12"}
            >
              {product.tables.map((table, tableIndex) => (
                <div key={tableIndex} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 sm:p-4 lg:p-5">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold">{table.title}</h3>
                  </div>
                  <div className="overflow-x-auto flex-1">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                        <tr>
                          {Object.keys(table.data[0]).map((header, headerIndex) => (
                            <th key={headerIndex} className="px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 text-left text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900 capitalize border-b-2 border-blue-200 whitespace-nowrap">
                              {header.replace(/_/g, ' ')}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {table.data.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-blue-50 transition-colors">
                            {Object.values(row).map((value, cellIndex) => (
                              <td key={cellIndex} className="px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 text-[9px] sm:text-xs lg:text-sm text-gray-700 align-top">
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
        productCategory="UFLOW"
        productImage={selectedProduct?.image}
      />
    </>
  );
};

export default UflowProductDetailPage;