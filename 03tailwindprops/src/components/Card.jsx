import React from 'react'

function Card(props) {

    //destructuring can also be done

    //props is an object

    // console.log('Props:', props);

    console.log(props.username, props.btnText, props.cardImageUrlArr);

    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src={props.cardImageUrlArr}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{props.username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                    debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-green-800">
                    {props.btnText || "Visit me"} →
                </button>
            </div>
        </div>

    )
}

export default Card 