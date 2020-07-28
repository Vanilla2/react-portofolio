import React from 'react';
import Underline from './underline';
import Project from './project';
import LazyLoad from 'react-lazyload';
import p1 from "../img/1.jpg";
import p2 from "../img/2.jpg";
import p3 from "../img/3.jpg";
import p4 from "../img/4.jpg";
import p5 from "../img/5.jpg";
import p6 from "../img/6.jpg";
import p7 from "../img/7.jpg";
import p8 from "../img/8.jpg";
import p9 from "../img/9.jpg";
import p10 from "../img/10.jpg";
import p11 from "../img/11.jpg";

function Projects(){

    return(
        <div className = "project-box">
            <LazyLoad offset = {[0,250]}>
                <div className = "project-text-box">
                    <p className = "project-text">Projects</p>
                    <Underline/>
                </div>
            </LazyLoad>
            <div className = "project-box-2">
                {/*7sab - https://apps.apple.com/us/app/7sab/id1439778779?app=itunes&ign-mpt=uo%3D4*/}
                {/*Aswaa - https://apps.apple.com/us/app/aswaq/id1101190120?app=itunes&ign-mpt=uo%3D4*/}
                {/*Kalimaty - https://apps.apple.com/us/app/kalimaty/id1497423275?app=itunes&ign-mpt=uo%3D4*/}
                {/*QatarCare EDU - https://apps.apple.com/us/app/qatarcare-edu/id1460793925?app=itunes&ign-mpt=uo%3D4*/}
                <Project 
                desc = {`A personal dictionary app crafted for people who prefer to create their own
                dictionaries for English language or any language you want to learn and memorize
                its words. It includes features like adding, removing, updating words and
                categories, pronunciation helper, and cross platform syncronization using Firebase.`} 
                android = {"https://play.google.com/store/apps/details?id=com.skyit.dictionary&hl=en"}
                ios ={"https://apps.apple.com/us/app/kalimaty/id1497423275?app=itunes&ign-mpt=uo%3D4"}
                used = {"iOS, Swift, Android, Kotlin, Firebase, external dictionary API."} 
                name = {"Kalimaty Dictionary"} 
                img1 = {p1} 
                img2 = {p2}
                image = {1}
                />
                <Project 
                desc = {`(pronounced HESAB), is a payment solution, the first payment gateway in
                Qatar. A platform that provides businesses, merchants and other service
                providers a payment collection method that helps merchants facilitate
                payment schemes at the convenience of their customers that is beneficial for
                everyone. 7sab is a unified place for online invoicing and payment gateway to
                ease commerce and money collections from customers.`} 
                android = {"https://play.google.com/store/apps/details?id=thinkit.qpay.hesab&hl=en"}
                ios = "https://apps.apple.com/us/app/7sab/id1439778779?app=itunes&ign-mpt=uo%3D4"
                used = {"iOS, Swift, Android, Kotlin, Thrift, Reactive Streams."} 
                name = {"7sab"} 
                img1 = {p3} 
                image = {1} 
                img2 = {p4}
                />
                <Project 
                desc = {`Aswaq is an ambitiuous project to reinvent the third party selling and buying
                market. One is able to create his own shops, post items for sell as normal 
                productions or various types of auctions, buy products. Highly customizable,
                meant to fit the needs of any sellers.`} 
                android = {"https://play.google.com/store/apps/details?id=thinkit.aswaq&hl=en"}
                ios = "https://apps.apple.com/us/app/aswaq/id1101190120?app=itunes&ign-mpt=uo%3D4"
                used = {"iOS, Swift, Android, Kotlin, Thrift, Reactive Streams."} 
                name = {"Aswaq"} 
                img1 = {p5} 
                image = {0} 
                img2 = {""}
                />
                <Project 
                desc = {`Education events app is an application made by Qatar care, Doha to present
                to the interested public the accredited courses that we offer.
                A interested visitor can see all the details about the topic and what he/she can
                learn about that topic, information about speakers, location of the training
                session. Then, one can register through the app and pay for the session.`} 
                android = {"https://play.google.com/store/apps/details?id=com.wcreations.trainingrooms&hl=en"}
                ios = "https://apps.apple.com/us/app/qatarcare-edu/id1460793925?app=itunes&ign-mpt=uo%3D4"
                image = {1} used = {"iOS, Swift, Android, Kotlin, Thrift, Reactive Streams."} 
                name = {"QatarCare EDU"} 
                img1 = {p6} 
                img2 = {p7}
                />
                <Project 
                desc = {`Ambitious start up aimed at improving the healthcare system, by providing
                everyone with the chance to make appointments through the app. The
                doctor’s are able to manage their schedule and clients accordingly. All in one
                place through the mobile app.`} 
                android = {""}
                ios = ""
                image = {1} 
                used = {"Android, Kotlin, gRPC, oAuth, Reactive Streams"} 
                name = {"Helfy"} 
                img2 = {p8} 
                img1 = {p9}
                />
                <Project 
                desc = {`Minimalistic News App for everyone. You can see the latest headlines and search for specific topics as well as filter by sources and categories. Also available in dark mode.`} 
                android = {""}
                ios = ""
                image = {1} 
                used = {"Kotlin, Firebase, RetroFit, Room, NewsApi"} 
                name = {"Your News"} 
                img2 = {p10} 
                img1 = {p11}
                />
            </div>
        </div>
    )
}

export default Projects;