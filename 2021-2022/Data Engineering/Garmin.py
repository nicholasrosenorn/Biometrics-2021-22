#!/usr/bin/env python3
import logging
import datetime

from garminconnect import (
    Garmin,
    GarminConnectConnectionError,
    GarminConnectTooManyRequestsError,
    GarminConnectAuthenticationError,
)

def connectToGarmin(email, password):
    # Configure debug logging

    today = datetime.date.today()
    
    lastweek = today - datetime.timedelta(days=7)
    api = Garmin(email, password)
    api.login()
    full_name = api.get_full_name()
    return api, today, lastweek, full_name

def heartRate(api, today):
    #resting_hr = api.get_rhr_day(today.isoformat())
    hr = api.get_heart_rates(today.isoformat())
    #print(hr['maxHeartRate'])
    #print(hr['minHeartRate'])
    #print(hr['restingHeartRate'])
    #print(hr['lastSevenDaysAvgRestingHeartRate'])
   #print(resting_hr)
    hrs = {"maxHeartRate": hr["maxHeartRate"], "minHeartRate": hr["minHeartRate"], "restingHeartRate": hr['restingHeartRate'], "lastSevenDaysAvgRestingHeartRate": hr['lastSevenDaysAvgRestingHeartRate']}
    #investigate how hr is formatted
    #Before Friday, get the username and return(connecttoGarmin)
    #engineer data so that is is in a format that you like

    # return that data - pandas df
    return hrs

def main():
    api, today, lastweek = connectToGarmin("nrosenor@purdue.edu", "Garmin!1")
    # get heart rate from function above
    hr_df = heartRate(api, today)
    print(hr_df)

    # connect to dB using function above
    #connector = connectToDb()

    #postToDB()


main()