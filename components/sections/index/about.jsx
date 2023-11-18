// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>

				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/profiel3.jpg" alt="Band picture"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="About"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'music' ]}
							copy="Embark on a sonic adventure with our 5-piece heavy rock n' roll band. Fronted by the powerful vocals of Jan-Willem Kerpershoek, our lineup features Vincent de Bruijn and Lex van der Zwaal on guitars, Rinus Veldhuijzen holding down the bass, and the rhythmic pulse provided by Robbert Olierook on drums. Together, we deliver tunes that get your fucked and resonate with a rebellious 'Yeehaw,' creating a raw, rowdy, and unforgiving sound."
						/>
						<BadgesBlock 
							title="Contact" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							iconClass={about.icon}
							icon="address-card"
							copy="Hit us up on goldwolffband@gmail.com or +31648120785. Or reach out to us on social media or at one of our gigs"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

				// <SectionTitle
				// 	title="EP Release"
				// 	preTitle="Synopsis"
				// 	subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
				// />

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]