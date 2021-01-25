import React from 'react';
import Button from '../components/Button';
import ButtonSecondary from '../components/ButtonSecondary';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import FeatureCard from '../components/FeatureCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import featuresData from '../data/features-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    
    <section id="herobanner" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <HeroImage />
      </div>
    </section>
    
  </Layout>
);
