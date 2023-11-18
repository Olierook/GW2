import Hero 		from '../components/sections/index/hero'
import Looking 		from '../components/sections/index/looking'
import About 		from '../components/sections/index/about'
import Technical 	from '../components/sections/index/technical'
import Career 		from '../components/sections/index/career'
import FeaturedProjects	from '../components/sections/projects/featured'
import Head from "next/head";


import Color 		from '../components/utils/page.colors.util'

import colors 		from '../content/index/_colors.json'

//
export default function HomePage() {

	return (
		<>
			<Head>
				<title>Goldwölff</title>
			</Head>
			<Color colors={colors} />
			<Hero />
			<FeaturedProjects />
			<About />
			{/* <Looking /> */}
			{/* <Technical /> */}
			{/* <Career /> */}
		</>
	);
}