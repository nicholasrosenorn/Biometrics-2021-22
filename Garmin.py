#!/usr/bin/env python3
import logging
import datetime

from garminconnect import (
    Garmin,
    GarminConnectConnectionError,
    GarminConnectTooManyRequestsError,
    GarminConnectAuthenticationError,
)

# Configure debug logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Example dates
today = datetime.date.today()
lastweek = today - datetime.timedelta(days=7)

def log_in():
    api = Garmin("nrosenor@purdue.edu", "Garmin!1")
    api.login()

def get_full_name():
    full_name = logger.info(api.get_full_name())

def get_unit_system():
    unit_system = logger.info(api.get_unit_system())

def get_stats():
    stats = logger.info(api.get_stats(today.isoformat()))

def get_user_summary():
    user_summary = logger.info(api.get_user_summary(today.isoformat()))

def get_body_composition_today():
    body_composition_today = logger.info(api.get_body_composition(today.isoformat()))

def get_body_composition_multiple_days():
    body_composition_multiple_days = logger.info(api.get_body_composition(lastweek.isoformat(), today.isoformat()))

def get_stats_body():
    stats_body = logger.info(api.get_stats_and_body(today.isoformat()))




try:
    # API

    ## Initialize Garmin api with your credentials
    api = Garmin("nrosenor@purdue.edu", "Garmin!1")

    ## Login to Garmin Connect portal
    api.login()

    # USER INFO

    # Get full name from profile
    #logger.info(api.get_full_name())

    ## Get unit system from profile
    #logger.info(api.get_unit_system())


    # USER STATISTIC SUMMARIES

    ## Get activity data for today 'YYYY-MM-DD'
    logger.info(api.get_stats(today.isoformat()))

    '''## Get activity data (to be compatible with garminconnect-ha)
    logger.info(api.get_user_summary(today.isoformat()))

    ## Get body composition data for today 'YYYY-MM-DD' (to be compatible with garminconnect-ha)
    logger.info(api.get_body_composition(today.isoformat()))

    ## Get body composition data for multiple days 'YYYY-MM-DD' (to be compatible with garminconnect-ha)
    logger.info(api.get_body_composition(lastweek.isoformat(), today.isoformat()))

    ## Get stats and body composition data for today 'YYYY-MM-DD'
    logger.info(api.get_stats_and_body(today.isoformat()))


    # USER STATISTICS LOGGED

    ## Get steps data for today 'YYYY-MM-DD'
    logger.info(api.get_steps_data(today.isoformat()))
    
    ## Get heart rate data for today 'YYYY-MM-DD'
    logger.info(api.get_heart_rates(today.isoformat()))

    ## Get resting heart rate data for today 'YYYY-MM-DD'
    logger.info(api.get_rhr_day(today.isoformat()))

    ## Get hydration data 'YYYY-MM-DD'
    logger.info(api.get_hydration_data(today.isoformat()))

    ## Get sleep data for today 'YYYY-MM-DD'
    logger.info(api.get_sleep_data(today.isoformat()))

    ## Get stress data for today 'YYYY-MM-DD'
    logger.info(api.get_stress_data(today.isoformat()))

    ## Get respiration data for today 'YYYY-MM-DD'
    logger.info(api.get_respiration_data(today.isoformat()))

    ## Get SpO2 data for today 'YYYY-MM-DD'
    logger.info(api.get_spo2_data(today.isoformat()))

    ## Get max metric data (like vo2MaxValue and fitnessAge) for today 'YYYY-MM-DD'
    logger.info(api.get_max_metrics(today.isoformat()))

    ## Get personal record for user
    logger.info(api.get_personal_record())

    ## Get earned badges for user
    logger.info(api.get_earned_badges())

    ## Get adhoc challenges data from start and limit
    logger.info(api.get_adhoc_challenges(1,100)) # 1=start, 100=limit

    # Get badge challenges data from start and limit
    logger.info(api.get_badge_challenges(1,100)) # 1=start, 100=limit

    # ACTIVITIES

    # Get activities data from start and limit
    activities = api.get_activities(0,1) # 0=start, 1=limit
    logger.info(activities)

    # Get activities data from startdate 'YYYY-MM-DD' to enddate 'YYYY-MM-DD', with (optional) activitytype
    # Possible values are [cycling, running, swimming, multi_sport, fitness_equipment, hiking, walking, other]
    activities = api.get_activities_by_date(startdate, enddate, activitytype)

    # Get last activity
    logger.info(api.get_last_activity())

    ## Download an Activity
    for activity in activities:
        activity_id = activity["activityId"]
        logger.info("api.download_activities(%s)", activity_id)

        gpx_data = api.download_activity(activity_id, dl_fmt=api.ActivityDownloadFormat.GPX)
        output_file = f"./{str(activity_id)}.gpx"
        with open(output_file, "wb") as fb:
            fb.write(gpx_data)

        tcx_data = api.download_activity(activity_id, dl_fmt=api.ActivityDownloadFormat.TCX)
        output_file = f"./{str(activity_id)}.tcx"
        with open(output_file, "wb") as fb:
            fb.write(tcx_data)

        zip_data = api.download_activity(activity_id, dl_fmt=api.ActivityDownloadFormat.ORIGINAL)
        output_file = f"./{str(activity_id)}.zip"
        with open(output_file, "wb") as fb:
            fb.write(zip_data)

        csv_data = api.download_activity(activity_id, dl_fmt=api.ActivityDownloadFormat.CSV)
        output_file = f"./{str(activity_id)}.csv"
        with open(output_file, "wb") as fb:
            fb.write(csv_data)

    ## Get activity splits
    first_activity_id = activities[0].get("activityId")
    owner_display_name =  activities[0].get("ownerDisplayName")

    logger.info(api.get_activity_splits(first_activity_id))

    ## Get activity split summaries for activity id
    logger.info(api.get_activity_split_summaries(first_activity_id))

    ## Get activity weather data for activity
    logger.info(api.get_activity_weather(first_activity_id))

    ## Get activity hr timezones id
    logger.info(api.get_activity_hr_in_timezones(first_activity_id))

    ## Get activity details for activity id
    logger.info(api.get_activity_details(first_activity_id))

    # ## Get gear data for activity id
    logger.info(api.get_activity_gear(first_activity_id))

    ## Activity self evaluation data for activity id
    logger.info(api.get_activity_evaluation(first_activity_id))


    # DEVICES

    ## Get Garmin devices
    devices = api.get_devices()
    logger.info(devices)

    ## Get device last used
    device_last_used = api.get_device_last_used()
    logger.info(device_last_used)

    for device in devices:
        device_id = device["deviceId"]
        logger.info(api.get_device_settings(device_id))

    ## Get device settings
    for device in devices:
        device_id = device["deviceId"]
        logger.info(api.get_device_settings(device_id))


    ## Logout of Garmin Connect portal
    # api.logout()'''

except (
        GarminConnectConnectionError,
        GarminConnectAuthenticationError,
        GarminConnectTooManyRequestsError,
    ) as err:
    logger.error("Error occurred during Garmin Connect communication: %s", err)
