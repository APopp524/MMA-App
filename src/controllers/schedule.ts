import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Schedule {
    EventId: Number;
    LeagueId: Number;
    Name: String;
    ShortName: String;
    Season: Number;
    Day: Date;
    DateTime: Date;
    Status: String;
    Active: Boolean;
}

interface Event {
    EventId: Number;
    LeagueId: Number;
    Name: String;
    ShortName: String;
    Season: Number;
    Day: Date;
    DateTime: Date;
    Status: String;
    Active: Boolean;
    Fights: Object;
}



const eventId = 220

// gets schedule for selected year
const getSchedule = async (req: Request, res: Response, next: NextFunction) => {
    //TODO: make req for league and season here
    const league = "UFC"
    const season = "2021"
    const apiKey = process.env.API_KEY
    // get schedule of events for selected year
    let result: AxiosResponse = await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Schedule/${league}/${season}?key=${apiKey}`);   
    let schedule: [Schedule] = result.data;
    return res.status(200).json({
        message: schedule
    });
};

// getting a single event
const getEvent = async (req: Request, res: Response, next: NextFunction) => {
    // get the event id from the req
    //TODO: make req for event id here
    // let id: string = req.params.id;
    const eventId = 220

    const apiKey = process.env.API_KEY
    // get the post
    let result: AxiosResponse = await axios.get(`https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=${apiKey}`);
    let event: Event = result.data;
    return res.status(200).json({
        message: event
    });
};

export default { getSchedule, getEvent };