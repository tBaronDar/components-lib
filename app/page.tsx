import Accordion from "@/components/accordion/accordion";
import Carousel from "@/components/carousel/carousel";
import Table from "@/components/table/table";

//dummy data
import { FAQ, carouselData } from "@/data/dummy_data";

export default function ComponentsLib() {
	return (
		<main>
			<Accordion data={FAQ} />
			<Carousel data={carouselData} />
			{/* <Table /> */}
		</main>
	);
}
