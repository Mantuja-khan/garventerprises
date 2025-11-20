import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Package, Shield, Star, ArrowRight, Milestone, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import QuoteModal from '../components/common/QuoteModal';
import katashi from "../assets/brands/katashi.png";
import aipl from "../assets/brands/aipl.png";
import ralliwolf from "../assets/brands/ralliwolf.png";
import crc from "../assets/brands/crc.png";
import makita from "../assets/brands/makita.png"
import miles from "../assets/brands/milestone.png"
import maxcut from "../assets/brand_product/maxcut.png";
import maxfilm from "../assets/brand_product/maxfilm.png";
import tripro from "../assets/brand_product/tripro.png";
import buflex from "../assets/brand_product/buflex.png";
import finishing_main from "../assets/brand_product/finishing_main.png";
import water_proof_1 from "../assets/brand_product/water_proof_1.png";
import filler_main from "../assets/brand_product/filler_main.png";
import masking_main from "../assets/brand_product/masking_main.jpg";
import accessories_2 from "../assets/brand_product/accessories_2.png";

import rs180 from "../assets/ralliwolf/rs180.png"
import rp30_3 from "../assets/ralliwolf/rp30_3.png";
import aloxide_resin_belts from "../assets/aipl_abro/aloxide_resin_belts.png"
import aluminium_belts from "../assets/aipl_abro/aluminium_belt.png"
import cc34x from "../assets/aipl_abro/cc34x.png"
import hole_grid_disc from "../assets/aipl_abro/hole_grid_disc.png"
import no_hole_psa_disc from "../assets/aipl_abro/no_hole_psa_disc.png"
import crc_dust_free from "../assets/crc/crc_dust_free.png"
import crc_fast_dry_degreaser from "../assets/crc/crc_fast_dry_degreaser.png"
import inox_clean from "../assets/crc/inox_kleen.png"
import main_hand from "../assets/crc/main_hand.png"
import crc_supercut from "../assets/crc/crc_supercut.png"
import crc_silicon from "../assets/crc/crc_silicon.png"
import crc_high_speed_grease from "../assets/crc/crc_high_speed_grease.png"
import crc_copper_paste from "../assets/crc/crc_copper_paste.png"
import ac_main from "../assets/crc/ac_main.png"

//Katashi main pictures smart from here
import katashi_main from "../assets/katashi/katashi_main_image.jpeg"
import sd_main from "../assets/katashi/sd_main.png"
import dg_main from "../assets/katashi/main_images/die_grinder_4.png"
import ag_main from "../assets/katashi/main_images/ag_main.png"
import ah_main from "../assets/katashi/main_images/ah_main.png"
import riv_main from "../assets/katashi/main_images/riv_main.png"
import esd_main from "../assets/katashi/main_images/esd_main.png"
import sp_main from "../assets/katashi/sp_main.jpeg"
import rat_main from "../assets/katashi/rat_main.jpeg"
import drill_main from "../assets/katashi/drill_main.jpeg"
import rf_drill from "../assets/ralliwolf/main_images/drill_main.png"
import rf_grinder from "../assets/ralliwolf/main_images/grinder_main.jpg"
import rf_mc_main from "../assets/ralliwolf/main_images/megnetic_main.jpg"
import rf_mcd from "../assets/ralliwolf/main_images/magnetic_3.png"
import we_main from "../assets/ralliwolf/main_images/welding_main.jpg"
import pt_main from "../assets/ralliwolf/main_images/pt_main.png"
import it_main from "../assets/ralliwolf/main_images/industrial_main.png"
import kovax_logo from "../assets/brands/kovax_logo.png";


//Makita main images statred from here
import main_cutter from "../assets/makita/main_image/main_cutter.jpg"
import main_grinder from "../assets/makita/main_image/main_grinder.jpg"
import main_jacket from "../assets/makita/main_image/main_jacket.jpg"
import main_sander from "../assets/makita/main_image/main_sander.jpg"
import main_saw from "../assets/makita/main_image/main_saw.jpg"
import main_wrench from "../assets/makita/main_image/main_wrench.jpg"
import main_drill from "../assets/makita/main_image/drill_main.jpg"

// kovax main products started from here 
import cutter from "../assets/milestone/cutter.png"
import m21200 from "../assets/milestone/m21200.png"
import ms80161 from "../assets/milestone/ms80161.png"
import fasteners from "../assets/milestone/fasteners.png"
import stichwire from "../assets/milestone/stichwire.png"


const BrandProductsPage: React.FC = () => {
  const { brand } = useParams();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{ name: string; image: string } | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const brandData = {
    katashi: {
      name: 'KATASHI',
      description: 'This has helped us to develop katashi, offering supreme quality forunmatched pricing. We are professional techno-commercial managers aiming to empower industries by reducing cost. With over 27 years of industrial application experience, we have successfully introduced a wide range of products which are best suitable for various applications at the most affordable prices.',
      image: katashi,
      products: [
        {
          id: 'impact-wrenches',
          name: 'IMPACT WRENCHES',
          description: 'High-quality impact wrenches for various applications. Available in different sizes and torque ratings.',
          image: katashi_main,
          features: ['Durable Construction', 'High Torque', 'Ergonomic Design'],
          popular: true,
          category: 'tools'
        },
        {
          id: 'screw-drivers',
          name: 'SCREW DRIVERS',
          description: 'High-quality screw drivers for various applications. Available in different sizes and torque ratings.',
          image: sd_main,
          features: ['Durable Construction', 'High Torque', 'Ergonomic Design'],
          category: 'tools'
        },
        {
          id: 'drill',
          name: 'DRILL',
          description: 'High-performance drills for various applications. Available in different sizes and power ratings.',
          image: drill_main,
          features: ['High Strength', 'Cling Properties', 'Bulk Supply'],
          popular: true,
          category: 'tools'
        },
        {
          id: 'die-grinders',
          name: 'DIE GRINDERS',
          description: 'High-speed die grinders for precision machining and finishing.',
          image: dg_main,
          features: ['Compact Design', 'Variable Speed', 'Durable Construction'],
          category: 'tools'
        },
        {
          id: 'angle-grinders',
          name: 'ANGLE GRINDERS',
          description: 'High-performance angle grinders for various applications.',
          image: ag_main,
          features: ['Durable Construction', 'Adjustable Speed', 'Ergonomic Design'],
          category: 'tools'
        },
        {
          id: 'air-hammers',
          name: 'AIR HAMMERS',
          description: 'High-quality hammers for various applications.',
          image: ah_main,
          features: ['Durable Construction', 'High Impact Force', 'Ergonomic Design'],
          category: 'tools'
        },
        {
          id: 'riveters',
          name: 'RIVETERS',
          description: 'High-speed riveters for precision fastening and assembly.',
          image: riv_main,
          features: ['Compact Design', 'Variable Speed', 'Durable Construction'],
          category: 'tools'
        },
        {
          id: 'electric-screw-drivers',
          name: 'ELECTRIC SCREW DRIVERS',
          description: 'High-speed electric screw drivers for precision fastening and assembly.',
          image: esd_main,
          features: ['Compact Design', 'Variable Speed', 'Durable Construction'],
          category: 'tools'
        },
        {
          id: 'sanders-polishers',
          name: 'SANDERS & POLISHERS',
          description: 'High-speed sanders and polishers for precision finishing.',
          image: sp_main,
          features: ['Compact Design', 'Variable Speed', 'Durable Construction'],
          category: 'tools'
        },
        {
          id: 'ratchets',
          name: 'RATCHETS',
          description: 'High-speed ratchets for precision fastening and assembly.',
          image: rat_main,
          features: ['Compact Design', 'Variable Speed', 'Durable Construction'],
          category: 'tools'
        },
      ]
    },
    ralliWolf: {
      name: 'RALLI WOLF',
      description: 'Power Tools || Welding Equipment || Air Tools || Motors || Farm Equipment',
      image: ralliwolf,
      products: [
        {
          id: 'compact-drill',
          name: 'DRILL',
          description: 'Compact and powerful drill for precision drilling in metal, wood, and concrete.',
          image: rf_drill,
          features: ['Lightweight & Portable', 'Variable Speed', 'Ergonomic Grip'],
        },
        {
          id: 'grinder',
          name: 'GRINDER',
          description: 'Heavy-duty grinder for grinding, cutting, and polishing tasks.',
          image: rf_grinder,
          features: ['High Power Output', 'Overload Protection', 'Comfortable Handle'],
        },
        {
          id: 'wood-working',
          name: 'WOOD WORKING',
          description: 'Reliable wood working tools for accurate and smooth cutting.',
          image: rs180,
          features: ['Powerful Motor', 'Depth Adjustment', 'User-Friendly Design'],
        },
        {
          id: 'magnetic-core-drill',
          name: 'MAGNETIC CORE DRILL',
          description: 'Precision drilling in metal using strong magnetic base support.',
          image: rf_mcd,
          features: ['High Torque', 'Stable Magnetic Base', 'Portable Design'],
        },
        {
          id: 'welding-equipment',
          name: 'WELDING EQUIPMENT',
          description: 'Durable welding machines for industrial and fabrication use.',
          image: we_main,
          features: ['Stable Arc', 'Heavy Duty Build', 'High Efficiency'],
        },
        {
          id: 'pneumatic-tools',
          name: 'PNEUMATIC TOOLS',
          description: 'Air-powered tools for high-performance industrial applications.',
          image: pt_main,
          features: ['High Torque', 'Durable Body', 'Low Maintenance'],
        },
        {
          id: 'farm-equipment',
          name: 'FARM EQUIPMENT',
          description: 'Efficient farm machinery for agricultural productivity.',
          image: rp30_3,
          features: ['High Durability', 'Fuel Efficient', 'Easy Operation'],
          popular: true,
        },
        {
          id: 'industrial-tools',
          name: 'INDUSTRIAL TOOLS',
          description: 'Versatile tools for heavy-duty industrial and workshop use.',
          image: it_main,
          features: ['Robust Build', 'Flexible Shaft', 'Variable Speed'],
        },
        {
          id: 'marble-cutter',
          name: 'MARBLE CUTTER',
          description: 'Compact cutter designed for precise marble and tile cutting.',
          image: rf_mc_main,
          features: ['Powerful Motor', 'Accurate Cutting', 'Portable Design'],
        }
      ]
    },
    aiplabro: {
      name: 'AIPL Abro',
      description: 'THE RIGHT CHOICE FOR PERFORMANCE & RESULTS ',
      image: aipl,
      products: [
        {
          id: 'narrow-belts',
          name: 'NARROW BELTS',
          description: 'High-quality sanding belts for metalworking and woodworking applications.',
          image: aloxide_resin_belts,
          features: ['Lightweight Design', 'Variable Speed Control', 'Ergonomic Grip'],
        },
        {
          id: 'wide-belts',
          name: 'WIDE BELTS',
          description: 'Powerful grinder for cutting, grinding, and polishing various materials in automotive and industrial applications.',
          image: aluminium_belts,
          features: ['High Power Output', 'Adjustable Speed Settings', 'Ergonomic Design'],
        },
        {
          id: 'cloth-roll',
          name: 'CLOTH ROLL',
          description: 'High-performance belts designed for heavy-duty applications in metalworking and woodworking.',
          image: cc34x,
          features: ['Durable Construction', 'High Abrasion Resistance', 'Flexible Design'],
        },
        {
          id: 'abrasive-paper',
          name: 'ABRASIVE PAPER',
          description: 'High-performance zirconium belts for aggressive grinding and finishing applications.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJPm8svNMsyA5bicjb5udE54YVvnhaK2Pu-UOBOwc1pNN-46LFGSr3pLCt6SKtBx4SSA&usqp=CAU',
          features: ['Long Lasting', 'High Cutting Speed', 'Versatile Applications'],
        },
        {
          id: 'gric-disc',
          name: 'GRIC DIST',
          description: 'Heavy-duty water-resistant paper for various industrial applications.',
          image: hole_grid_disc,
          features: ['Water Resistant', 'Durable', 'Versatile Applications'],
        },
        {
          id: 'psa-disc',
          name: 'PSA DISC',
          description: 'High-speed grinder for precision grinding and finishing in automotive and industrial applications.',
          image: no_hole_psa_disc,
          features: ['Fast cut and long life', 'Minimize dust',],
          popular: true,
        },
      ]
    },
    makita: {
      name: 'MAKITA',
      description: 'Power Tools || Welding Equipment || Air Tools || Motors || Farm Equipment ',
      image: makita,
      products: [
        {
          id: 'cordless-driver-drill',
          name: 'CORDLESS DRIVER DRILL',
          description: 'High-quality cordless driver drill for precision drilling and fastening in tight spaces.',
          image: main_drill,
          features: ['Lightweight Design', 'Variable Speed Control', 'Ergonomic Grip'],
        },
        {
          id: 'cordless-cutter',
          name: 'CORDLESS CUTTER',
          description: 'Powerful grinder for cutting, grinding, and polishing various materials in automotive and industrial applications.',
          image: main_cutter,
          features: ['High Power Output', 'Adjustable Speed Settings', 'Ergonomic Design'],
        },
        {
          id: 'cordless-wrench',
          name: 'CORDLESS WRENCH',
          description: 'High-performance cordless wrenches for various applications.',
          image: main_wrench,
          features: ['Powerful Motor', 'Adjustable Torque Settings', 'Ergonomic Handle'],
        },
        {
          id: 'cordless-grinder',
          name: 'CORDLESS GRINDER',
          description: 'Powerful cordless grinder for cutting, grinding, and polishing various materials in automotive and industrial applications.',
          image: main_grinder,
          features: ['High Power Output', 'Adjustable Speed Settings', 'Ergonomic Design'],
        },
        {
          id: 'cordless-saw',
          name: 'CORDLESS SAW',
          description: 'High-performance cordless saw for various applications.',
          image: main_saw,
          features: ['High Temperature Resistance', 'Durable Construction', 'Precision Control'],
        },
        // {
        //   id: 'cordless-saw',
        //   name: 'CORDLESS SAW',
        //   description: 'High-performance cordless saw designed for heavy-duty applications in metalworking and construction.',
        //   image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400',
        //   features: ['High Torque', 'Durable Construction', 'Variable Speed Control'],
        // },
        {
          id: 'cordless-jacket',
          name: 'CORDLESS JACKET',
          description: 'Versatile industrial tools for various applications in metalworking and construction.',
          image: main_jacket,
          features: ['Flexible Shaft', 'Variable Speed Control', 'Lightweight Design'],
        },
        {
          id: 'cordless-sander',
          name: 'CORDLESS SANDER',
          description: 'Versatile industrial tools for various applications in metalworking and construction.',
          image: main_sander,
          features: ['Flexible Shaft', 'Variable Speed Control', 'Lightweight Design'],
        },

        //  {
        //   id: 'others',
        //   name: 'OTHERS',
        //   description: 'Versatile industrial tools for various applications in metalworking and construction.',
        //   image: others,
        //   features: ['Flexible Shaft', 'Variable Speed Control', 'Lightweight Design'],
        // },

      ]
    },
    crc_industries: {
      name: 'CRC INDUSTRIES',
      description: 'CRC Industries is a worldwide supplier of chemical products for the industry, automotive and electro segments. The company consists of four operating groups headquartered in the United States, Belgium, the United Kingdom and Australia. CRC Industries Europe is ISO 9001 certified. ',
      image: crc,
      products: [
        {
          id: 'cleaner',
          name: 'CLEANER',
          description: 'High-quality compact drill for precision drilling and fastening in tight spaces.',
          image: crc_dust_free,
          features: ['Lightweight Design', 'Variable Speed Control', 'Ergonomic Grip'],
        },
        {
          id: 'cleaner-heavy-duty',
          name: 'CLEANER HEAVY DUTY',
          description: 'Powerful grinder for cutting, grinding, and polishing various materials in automotive and industrial applications.',
          image: crc_fast_dry_degreaser,
          features: ['High Power Output', 'Adjustable Speed Settings', 'Ergonomic Design'],
        },
        {
          id: 'cleaner-water-based',
          name: 'CLEANER WATER BASED',
          description: 'High-performance wood working tools for precise cutting of wood and other materials.',
          image: inox_clean,
          features: ['Powerful Motor', 'Adjustable Cutting Depth', 'Ergonomic Handle'],
        },
        {
          id: 'hand-cleaner',
          name: 'HAND CLEANER',
          description: 'Powerful magnetic core drill for precise drilling in metal and other materials.',
          image: main_hand,
          features: ['High Torque', 'Variable Speed Control', 'Portable Design'],
        },
        {
          id: 'lubricant-cutting-fluid',
          name: 'LUBRICANTS',
          description: 'High-performance welding equipment for various applications.',
          image: crc_supercut,
          features: ['High Temperature Resistance', 'Durable Construction', 'Precision Control'],
        },
        {
          id: 'lubricant-oils',
          name: 'LUBRICANT-OILS',
          description: 'High-performance water-proof paper designed for various applications.',
          image: crc_silicon,
          features: ['High Durability', 'Efficient Performance', 'User-Friendly Design'],
          popular: true,
        },
        {
          id: 'lubricant-grease',
          name: 'LUBRICANT-GREASE',
          description: 'High-performance pneumatic tools designed for heavy-duty applications in metalworking and construction.',
          image: crc_high_speed_grease,
          features: ['High Torque', 'Durable Construction', 'Variable Speed Control'],
        },
        {
          id: 'anti-corrosion',
          name: 'ANTI-CORROSION',
          description: 'High-performance water-proof paper designed for various applications.',
          image: ac_main,
          features: ['High Durability', 'Efficient Performance', 'User-Friendly Design'],
          popular: true,
        },
        {
          id: 'lubricant-paste',
          name: 'LUBRICANT PASTE',
          description: 'Versatile industrial tools for various applications in metalworking and construction.',
          image: crc_copper_paste,
          features: ['Flexible Shaft', 'Variable Speed Control', 'Lightweight Design'],
        },


      ]
    },
    kovax: {
      name: 'KOVAX',
      description: 'Innovative abrasives and surface preparation solutions for automotive and industrial applications',
      image: kovax_logo,
      products: [
        {
          id: 'maxcut',
          name: 'MAXCUT',
          description: 'High-quality abrasive paper rolls for sanding and surface finishing in woodworking, metalworking, and auto body repair.',
          image: maxcut,
          features: ['Consistent Grit Distribution', 'Long-Lasting Backing', 'Available in Multiple Grits'],
        },
        {
          id: 'maxfilm',
          name: 'MAXFILM',
          description: 'Anti-dust and anti-static filter sheets used during car refinishing processes to trap particles and ensure clean surfaces.',
          image: maxfilm,
          features: ['High Particle Retention', 'Low Air Resistance', 'Improves Paint Quality'],
        },

        {
          id: 'tri-pro',
          name: 'TRI-PRO',
          description: 'Powder-based dry guide coat for detecting surface imperfections during sanding and preparation.',
          image: tripro,
          features: ['No Need for Masking', 'Reveals High/Low Spots', 'Compatible with Dry Sanding'],
        },
        {
          id: 'buflex',
          name: 'BUFLEX',
          description: 'Flexible sanding sheets designed for dry sanding operations in refinishing and woodworking.',
          image: buflex,
          features: ['Anti-Clog Coating', 'Durable Grain Bonding', 'Tear Resistant'],
        },
        {
          id: 'finishing-system',
          name: 'FINISHING SYSTEM',
          description: 'Static-cling masking film used to protect car surfaces during spray painting.',
          image: finishing_main,
          features: ['Paint Absorbent', 'Easy Unroll', 'Tear Resistant'],
        },
        {
          id: 'water-proof-paper',
          name: 'WATER PROOF PAPER',
          description: 'Precision masking tape used for creating sharp paint edges and designs in auto body painting.',
          image: water_proof_1,
          features: ['High Adhesion', 'Clean Removal', 'Flexible for Curves'],
          popular: true,
        },
        {
          id: 'filler-and-putty',
          name: 'FILLER AND PUTTY',
          description: 'Complete range of dry sanding abrasives including discs, rolls, and sheets for automotive and industrial applications.',
          image: filler_main,
          features: ['High-Cut Power', 'Anti-Clog Formula', 'Long-Lasting'],
        },
        {
          id: 'masking-product',
          name: 'MASKING PRODUCT',
          description: 'Ergonomically designed pneumatic dual action (DA) sander for efficient sanding and surface prep.',
          image: masking_main,
          features: ['Low Vibration', 'Lightweight Build', 'Variable Speed'],
        },
        {
          id: 'component-and-accessories',
          name: 'COMPONENT AND ACCESSORIES',
          description: 'Sticky cloth used for removing dust, dirt, and lint from surfaces before painting or finishing.',
          image: accessories_2,
          features: ['Lint-Free', 'Non-Drying Resin', 'Safe on All Surfaces'],
        }
      ]
    },

    miles: {
      name: 'Miles',
      description: 'Miles has been instrumental in enhancing the productivity of businesses with itsdiverse range of quality tools comprising Staplers & Tackers, Hammer Tackers, Pneumatic Tackers, Staple Remover, Staples, Industrial Staples, Stitching Wire, Tape Tool, Cutter Knives & Blades',
      image: miles,
      products: [
        {
          id: 'cutter-knives',
          name: 'CUTTER & KNIVES',
          description: 'High-quality abrasive paper rolls for sanding and surface finishing in woodworking, metalworking, and auto body repair.',
          image: cutter,
          features: ['Consistent Grit Distribution', 'Long-Lasting Backing', 'Available in Multiple Grits'],
        },
        {
          id: 'manual-tools',
          name: 'MANUAL TOOLS',
          description: 'Anti-dust and anti-static filter sheets used during car refinishing processes to trap particles and ensure clean surfaces.',
          image: m21200,
          features: ['High Particle Retention', 'Low Air Resistance', 'Improves Paint Quality'],
        },

        {
          id: 'm-pneumatic-tools',
          name: 'PNEUMATIC TOOLS (MS 80-16L)',
          description: 'Powder-based dry guide coat for detecting surface imperfections during sanding and preparation.',
          image: ms80161,
          features: ['No Need for Masking', 'Reveals High/Low Spots', 'Compatible with Dry Sanding'],
        },
        {
          id: 'fasteners',
          name: 'FASTENERS',
          description: 'Flexible sanding sheets designed for dry sanding operations in refinishing and woodworking.',
          image: fasteners,
          features: ['Anti-Clog Coating', 'Durable Grain Bonding', 'Tear Resistant'],
        },
        {
          id: 'stitch-wire',
          name: 'STITCHING WIRES',
          description: 'Static-cling masking film used to protect car surfaces during spray painting.',
          image: stichwire,
          features: ['Paint Absorbent', 'Easy Unroll', 'Tear Resistant'],
        },

      ]
    },
  };

  // Function to handle catalogue download
  const handleDownloadCatalogue = async () => {
    if (!brand || !brandData[brand as keyof typeof brandData]) return;

    const currentBrand = brandData[brand as keyof typeof brandData];
    setIsDownloading(true);

    try {
      // Check if catalogueUrl exists and try to download it
      if (currentBrand.catalogueUrl) {
        // Try to fetch the actual PDF file
        const response = await fetch(currentBrand.catalogueUrl);

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${currentBrand.name}-Catalogue.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        } else {
          throw new Error('Catalogue file not found');
        }
      } else {
        // Generate a dynamic PDF catalogue if no file exists
        generateDynamicCatalogue(currentBrand);
      }
    } catch (error) {
      console.error('Error downloading catalogue:', error);
      // Fallback: Generate dynamic catalogue
      generateDynamicCatalogue(currentBrand);
    } finally {
      setIsDownloading(false);
    }
  };

  // Function to generate a dynamic catalogue
  const generateDynamicCatalogue = (currentBrand: any) => {
    // Create HTML content for the catalogue
    const catalogueHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${currentBrand.name} Product Catalogue</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              max-width: 1200px;
              margin: 0 auto;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              border-bottom: 3px solid #FF6B35;
              padding-bottom: 20px;
            }
            .header h1 {
              color: #1a1a1a;
              font-size: 36px;
              margin-bottom: 10px;
            }
            .description {
              color: #666;
              line-height: 1.6;
              margin-bottom: 40px;
              padding: 20px;
              background: #f5f5f5;
              border-radius: 8px;
            }
            .product-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 30px;
              margin-top: 30px;
            }
            .product-card {
              border: 2px solid #e0e0e0;
              padding: 20px;
              border-radius: 8px;
              page-break-inside: avoid;
            }
            .product-card h3 {
              color: #FF6B35;
              font-size: 20px;
              margin-bottom: 10px;
            }
            .product-card p {
              color: #666;
              line-height: 1.5;
              margin-bottom: 15px;
            }
            .features {
              list-style: none;
              padding: 0;
            }
            .features li {
              padding: 5px 0;
              color: #333;
            }
            .features li:before {
              content: "✓ ";
              color: #FF6B35;
              font-weight: bold;
              margin-right: 5px;
            }
            .footer {
              margin-top: 50px;
              padding-top: 20px;
              border-top: 2px solid #e0e0e0;
              text-align: center;
              color: #666;
            }
            @media print {
              body { padding: 20px; }
              .product-grid { gap: 20px; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${currentBrand.name}</h1>
            <p style="color: #666; font-size: 18px;">Product Catalogue</p>
          </div>
          
          <div class="description">
            <h2 style="color: #1a1a1a; margin-top: 0;">About ${currentBrand.name}</h2>
            <p>${currentBrand.description}</p>
          </div>

          <h2 style="color: #1a1a1a; margin-bottom: 20px;">Our Products</h2>
          <div class="product-grid">
            ${currentBrand.products.map((product: any) => `
              <div class="product-card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <h4 style="color: #333; margin-top: 15px; margin-bottom: 10px;">Key Features:</h4>
                <ul class="features">
                  ${product.features.map((feature: string) => `<li>${feature}</li>`).join('')}
                </ul>
                ${product.popular ? '<p style="color: #FF6B35; font-weight: bold; margin-top: 10px;">⭐ Popular Choice</p>' : ''}
              </div>
            `).join('')}
          </div>

          <div class="footer">
            <p><strong>Contact us for more information and custom quotes</strong></p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
        </body>
      </html>
    `;

    // Create a Blob and download
    const blob = new Blob([catalogueHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${currentBrand.name}-Catalogue.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  if (!brand || !brandData[brand as keyof typeof brandData]) {
    return <Navigate to="/products" replace />;
  }

  const currentBrand = brandData[brand as keyof typeof brandData];
  const categories = ['all', ...Array.from(new Set(currentBrand.products.map(p => p.category)))];
  const filteredProducts = activeFilter === 'all'
    ? currentBrand.products
    : currentBrand.products.filter(product => product.category === activeFilter);

return (
  <>
    <Helmet>
      <title>{currentBrand.name} Products - Tools</title>
      <meta name="description" content={`${currentBrand.description}. Browse our complete ${currentBrand.name} product range with custom solutions available.`} />
      <meta name="keywords" content={`${currentBrand.name.toLowerCase()}, ${currentBrand.products.map((p: any) => p.name.toLowerCase()).join(', ')}, packaging materials`} />
      <link rel="canonical" href={`https://garventerprises.in/products/${brand}`} />
    </Helmet>

    <div className="pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-20">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 mb-6 md:mb-8"
        >
          <Link
            to="/products"
            className="flex items-center hover:text-primary-orange transition-colors"
          >
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            All Brands
          </Link>
          <span>/</span>
          <span className="text-primary-dark font-medium">{currentBrand.name}</span>
        </motion.div>

        {/* Brand Header - Image First on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-10 md:mb-16">
          {/* Image - Shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img
              src={currentBrand.image}
              alt={`${currentBrand.name} Industrial Products`}
              className="w-full h-48 sm:h-64 md:h-80 object-contain rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Content - Shows second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center mb-3 md:mb-4">
              <Package className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-orange mr-2 md:mr-3" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-dark">
                {currentBrand.name}
              </h1>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
              {currentBrand.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary-orange text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-medium text-sm sm:text-base text-center hover:bg-opacity-90 transition-all"
              >
                Get Custom Quote
              </button>
            </div>
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12"
        >
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded text-xs sm:text-sm md:text-base font-medium capitalize transition-all ${
                activeFilter === category
                  ? 'bg-primary-orange text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-primary-orange'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid - Responsive 2 columns on mobile, more on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map((product: any, index: number) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={`${product.name} - ${currentBrand.name}`}
                  className="w-full h-24 sm:h-32 md:h-40 lg:h-48 object-contain p-1.5 sm:p-2 md:p-3 lg:p-4"
                />
                {product.popular && (
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 bg-primary-orange text-white px-1.5 py-0.5 sm:px-2 md:px-3 md:py-1 rounded text-[10px] sm:text-xs md:text-sm font-medium flex items-center">
                    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 mr-0.5" />
                    <span className="hidden sm:inline">Popular</span>
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-primary-dark mb-2 sm:mb-3 md:mb-4 line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
                  {product.name}
                </h3>

                {/* Actions - Always Horizontal */}
                <div className="flex flex-row gap-1.5 sm:gap-2 md:gap-3">
                  <Link
                    to={`/products/${brand}/${product.id}`}
                    className="flex-1 bg-primary-orange text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs md:text-sm font-medium text-center flex items-center justify-center hover:bg-opacity-90 transition-all"
                  >
                    <span>View</span>
                    <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 ml-0.5 sm:ml-1" />
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedProduct({ name: product.name, image: product.image });
                      setIsQuoteModalOpen(true);
                    }}
                    className="flex-1 border border-gray-300 text-gray-600 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded text-[10px] sm:text-xs md:text-sm font-medium text-center hover:border-primary-orange hover:text-primary-orange transition-all"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
      productCategory={currentBrand.name}
      productImage={selectedProduct?.image}
    />
  </>
);
};

export default BrandProductsPage;




