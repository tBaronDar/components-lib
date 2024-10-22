import Accordion from "@/components/accordion/accordion";
import Carousel from "@/components/carousel/carousel";
import Table from "@/components/table/table";

//dummy data
import { FAQ, carouselData, playersData } from "@/data/dummy_data";

export default function ComponentsLib() {
	return (
		<main>
			<Table data={playersData} />
			<Accordion data={FAQ} />
			<Carousel data={carouselData} />
		</main>
	);
}
