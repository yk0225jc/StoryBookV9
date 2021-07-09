import React from "react";
import {ContainerButton, OutlinedButton} from './Buttons'

export default {
  title: "Inputs/Buttons,Links",

};


export const ButtonsLinks = () =>{
    return(
        <div>
        <ContainerButton>Button</ContainerButton>
        </div>
    )
}

export const ButtonsLinks2 = () =>{
    return(
        <OutlinedButton>Button</OutlinedButton>


    )

}


ButtonsLinks.storyName = "Buttons,Links";