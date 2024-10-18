import Accordion from "@/components/accordion/accordion";
import Carousel from "@/components/carousel/carousel";

export default function ComponentsLib() {
	// dummy data for the components
	//accordion
	const FAQ = [
		"Where is it right now?",
		"How can I renew my subscripsion?",
		"Where is your company's location?",
	];
	const carouselData = [
		{
			imageUrl:
				"https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			authorName: "Jenny Parker",
			authorJob: "Truck Driver at Scania.",
			testimonial:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia laborum delectus nostrum porro magnam nihil temporibus cum voluptates ad accusamus.",
		},
		{
			imageUrl:
				"https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			authorName: "William B. Jordan",
			authorJob: "Code destroyer at Rura.",
			testimonial:
				"Lorem ipsum dolor. Numquam, doloribus itaque velit ut consequatur excepturi quidem eveniet accusamus dolor aperiam sint qui, nostrum harum explicabo id error neque!",
		},
		{
			imageUrl:
				"https://images.unsplash.com/photo-1518222319626-82d31a0ba6b0?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			authorName: "Chantal Amorie",
			authorJob: "Baby-seal Clubber at The Arctic.",
			testimonial:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem iure, nihil eaque reiciendis fugit nisi modi illo fuga et possimus in quas. Dolorem dolores iste.",
		},
		{
			imageUrl:
				"https://images.unsplash.com/photo-1536246026435-0cbb2a92952a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			authorName: "Jaime Paliyo",
			authorJob: "Dream tester at Carousel",
			testimonial:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia laborum delectus nostrum porro magnam nihil temporibus cum voluptates ad accusamus.",
		},
	];
	return (
		<main>
			{FAQ.map((item) => (
				<Accordion key={item} index={FAQ.indexOf(item) + 1} question={item} />
			))}
			<Carousel data={carouselData} />
		</main>
	);
}
