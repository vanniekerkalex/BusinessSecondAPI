import requests
from bs4 import BeautifulSoup

count = 0
link = 'http://localhost:3000/calc/'
times = ['00:15:15&00:16:10', '00:15:15&00:16:10']

times = {
    "00:15:15&00:16:10": 55,
    "00:1515&00:16:10": "Unfortunately there was an error with calculating the time difference. Please check that you are usimng the correct time formats. hhmmssffffff or hh:mm:ss.ffffff.",
    "00:00:00&01:01:01": 3661,
    "01:00:00&00:01:01": 'Please check that your start_time is not larger (later) than your end_time.',
    "000000&010101": 3661
}

try:
    for each in times:
        response = requests.get(str(link + each))
        soup = BeautifulSoup(response.text, 'html.parser')
        print("Testing: " + str(each) + " --> Result: " + str(soup))
        if (str(soup) == str(times[each])):
            print("OK: The output matches the expected output.\n")
            count += 1
        else:
            print("Error: The output does NOT match the expected output.\n")
    print(str(count) + "/" + str(len(times)) + " tests passed.")
except:
    print("An error has occured. Please check that the server for BusinessSecondsAPI is running.")
