
import { Hero } from "../cmps/Hero"
import {Summery} from "../cmps/Summery"
import {Stories} from "../cmps/Stories"
import {Inviter} from "../cmps/Inviter"

export function HomePage() {

    return (
        <section className="home-page-container">
            <Hero/>
            <Summery/>
            <Stories/>
            <Inviter/>
        </section>
    )
}