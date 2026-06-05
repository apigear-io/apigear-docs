import React from 'react';
import Hero from '../components/Hero';

export default function HeroSection() {
    const item = {
        eyebrow: 'Open source · CLI · free',
        title: 'One shared API, from design to production',
        tagline: 'Define a stateful interface once with ObjectAPI — a common ground for designers and engineers — then generate native C++, Qt, Unreal, Python, Rust & Java SDKs, with simulation and monitoring built in.',
        link: '/docs/guide/quick-start',
        message: 'Get Started',
        secondaryLink: '/docs/',
        secondaryMessage: 'See how it works',
    };
    return (
        <Hero item={item} />
    );
}
