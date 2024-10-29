import Accordion from "@/components/accordion/accordion";
import Carousel from "@/components/carousel/carousel";
import Hero from "@/components/hero/hero";
import Pagination from "@/components/pagination/pagination";
import Table from "@/components/table/table";

//dummy data
import { FAQ, carouselData, playersData } from "@/data/dummy_data";

export default function ComponentsLib() {
	return (
		<main>
			{/* <Hero /> */}
			<Pagination pages={6} initialPage={1} />
			<Table data={playersData} />
			<Accordion data={FAQ} />
			<Carousel data={carouselData} />
		</main>
	);
}
