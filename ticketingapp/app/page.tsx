import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"



const Page = () => {
  return (
    <section>
      <h1 className="text-center"> The hub for Every Shows and Events <br/>You Cannot Miss
      </h1>
      <p className="text-center">Hackathons, Meetups ,Conferences and Concerts all at one Place</p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) =>(
            <li key={event.title}> 
            <EventCard {...event}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page