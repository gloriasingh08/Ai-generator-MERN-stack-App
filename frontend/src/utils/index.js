import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()* surpriseMePrompts.length); //generating a random index 
    const randomPrompt = surpriseMePrompts[randomIndex]; //fetching that random prompt at that generated randomIndex

    if(randomPrompt === prompt) return getRandomPrompt(prompt);
    
    return randomPrompt;
}