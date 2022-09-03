

const Hyperzestdetails= () =>{
    
    
    const details={
        eventfirstname:"HyperZest",
        eventlastname:"",
        overallclass:"bg-hyperzestbg bg-contain bg-no-repeat bg-fixed  bg-left-top bg-opacity-30",
        date:26,
        month:"Sep",
        year:2022,
        eventdescription:"Mind Twisters is an exciting event to make your brain go stark crazy! The event has 3 rounds to bring out the tycoon in you with a bit of jest. Participate with your pals to have fun while sharing your humorous ideas and an excellent knack for persuading the consumers, but with a funny way of expressing your plans.",
        numberofrounds:3,
        totalwinners:3,
        firstprizecash:750,
        secondprizecash:500,
        thirdprizecash:250,
    };
    


    return details;
}

const Hyperzestsroundsdetails=()=>{
    const roundsdetails=[
        {id:"1",btnid:"roundbtn1",onClickfunction:"roundbtnx",roundtitle:"Mind Games",rounddescription:"The participants will be provided with topics, from which they have to choose one and make a plan to sell the product, humorously that is feasible in the real world.",date:17,month:"Sep",year:2022},
        {id:"2",btnid:"roundbtn2",onClickfunction:"roundbtny",roundtitle:"Dragon's Den",rounddescription:"The selected participants will go through the second round where they have to go under interrogation with comical questions which they have to answer cleverly.",date:18,month:"Sep",year:2022},
        {id:"3",btnid:"roundbtn3",onClickfunction:"roundbtnz",roundtitle:"Interview",rounddescription:"The finalists will travel on a ship where their life is at stake. Their only chance of survival is in the hands of the ship captain. Use your wits to captivate the captain’s mind.",date:24,month:"Sep",year:2022},
    ]
    return roundsdetails;
}

const Hyperzestcontactdetails=()=>{
    const contactdetails = {
        contactperson1:"Gokulaa Krishnaa S",
        contactperson2:"Abishek",
        contact1:"7358543180",
        contact2:"8825829572",
        coordinators:["Gokulaa Krishnaa S","Abishek","Nayeema","Sivani D"],
        contactemail:"hyperzest@gmail.com",
    }

    return contactdetails;
}

export default {Hyperzestdetails,Hyperzestsroundsdetails,Hyperzestcontactdetails};