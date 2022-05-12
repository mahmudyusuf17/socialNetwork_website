import { lazy } from "react";

const Activity = lazy(() => import("../components/widgets/Activity"));
const Videos = lazy(() => import("../components/widgets/Videos"));
const People = lazy(() => import("../components/widgets/People"));
const Channels = lazy(() => import("../components/widgets/Channels"));
const Documents = lazy(() => import("../components/widgets/Documents"));

export default function Home(){
    return(
        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-6 lg:mt-20 lg:px-8 xl:mt-10">
            <div class="grid grid-cols-3 gap-8">
                <Videos/>
                <Activity/>
            </div>
            <div class="grid grid-cols-3 gap-8 pt-16">
                <div class="md:col-span-2 col-span-6">
                    <People/>
                    <Documents/>
                </div>
                <Channels/>
            </div>
        </main>
    )
}