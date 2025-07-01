package com.example.externalAPI.service;

import java.util.Map;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Service
public class TimeService 
{
    // @Cacheable("time")
    // public String getTime(String region)
    // {
    //      try
    //      {
    //           Thread.sleep(3000);
    //      }
    //      catch(InterruptedException i)
    //      {
    //          System.out.println(i);
    //      }
    //      return "time for "+ region + "is";
    // }



    private final RestTemplate restTemplate = new RestTemplate();
    private static final String API_KEY = "ZI5B56KAUMOV"; // 🔁 Replace with your key

    @Cacheable("time")
    public String getTime(String region) 
    {
        System.out.println("Calling TimeZoneDB API for: " + region);

        // Sample region: Asia/Kolkata → extract city as "Kolkata"
        // String[] parts = region.split("/");
        // String city = parts.length > 1 ? parts[1] : region;

        // TimeZoneDB only works with location-based queries. Here's a simplified example:
        String url = "http://api.timezonedb.com/v2.1/get-time-zone"
                   + "?key=" + API_KEY
                   + "&format=json"
                   + "&by=zone"
                   + "&zone=" + region;

        try {
            ResponseEntity<Map> response = this.restTemplate.getForEntity(url, Map.class);
            if (response.getStatusCode().is2xxSuccessful()) 
            {
                Map body = response.getBody();
                String formattedTime = (String) body.get("formatted");
                return "Current time in " + region + ": " + formattedTime;
            } else {
                return "Failed to get time: " + response.getStatusCode();
            }
        } catch (Exception e) {
            return "Error fetching time: " + e.getMessage();
        }
    }
}    


// ✅ Full Breakdown
// Concept	Method	Example Output
// HTTP Status	response.getStatusCode()	HttpStatus.OK (200)
// Response Body	response.getBody()	Map<String, Object> from JSON
// Body Value Access	body.get("formatted")	"2025-05-25 20:58:02"

// ✅ 2. "http://api.timezonedb.com/v2.1/get-time-zone"
// This is the base endpoint of the TimeZoneDB API.

// The path /v2.1/get-time-zone refers to the "Get Time Zone" endpoint of version 2.1 of the API.

// This endpoint is used to retrieve time zone data such as local time, GMT offset, and more.

// ✅ 3. "?key=" + API_KEY
// This starts the query string of the URL.

// key= is a required query parameter where you supply your API key.

// API_KEY is a variable in your code that should contain your actual API key (as a String).


// 5. "&by=zone"
// Another query parameter.

// It sets the method for identifying the location.

// by=zone means you will specify a time zone name, such as "Asia/Kolkata" or "America/New_York".

// Other possible values could be:

// by=position (if using latitude and longitude)

// by=city (if using city names — deprecated in some APIs)

















// ✅ Africa
// Africa/Abidjan

// Africa/Accra

// Africa/Addis_Ababa

// Africa/Cairo

// Africa/Johannesburg

// Africa/Lagos

// Africa/Nairobi

// ✅ America
// America/Anchorage

// America/Argentina/Buenos_Aires

// America/Bogota

// America/Chicago

// America/Denver

// America/Los_Angeles

// America/Mexico_City

// America/New_York

// America/Toronto

// ✅ Asia
// Asia/Bangkok

// Asia/Dubai

// Asia/Hong_Kong

// Asia/Jakarta

// Asia/Karachi

// Asia/Kolkata ✅ (India)

// Asia/Seoul

// Asia/Singapore

// Asia/Tokyo

// ✅ Australia
// Australia/Adelaide

// Australia/Brisbane

// Australia/Darwin

// Australia/Melbourne

// Australia/Sydney

// ✅ Europe
// Europe/Amsterdam

// Europe/Athens

// Europe/Berlin

// Europe/Lisbon

// Europe/London

// Europe/Madrid

// Europe/Paris

// Europe/Rome

// ✅ Pacific
// Pacific/Auckland

// Pacific/Fiji

// Pacific/Honolulu

// Pacific/Port_Moresby




// ✅ Step-by-step: Get TimeZoneDB API Key
// 1. Go to the TimeZoneDB website
// 👉 https://timezonedb.com

// 2. Sign up for a free account
// Click on “Sign Up” in the top-right corner.

// Fill in your details and create an account.

// Confirm your email address (if required).

// 3. Get your API key
// After logging in, go to your dashboard or directly visit:
// 👉 https://timezonedb.com/api

// You'll see your API Key listed there. It’s a string like:

// nginx
// Copy
// Edit
// ZI5B56KAUMOV
// 4. Use the API key in your code
// You already have this line in your code:

// java
// Copy
// Edit
// private static final String API_KEY = "ZI5B56KAUMOV";
// Replace "ZI5B56KAUMOV" with your own key from TimeZoneDB.

// 📘 Sample API URL Format
// Here’s a complete example for Asia/Kolkata:

// http
// Copy
// Edit
// http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=json&by=zone&zone=Asia/Kolkata
// It will return a JSON response like:

// json
// Copy
// Edit
// {
//   "status": "OK",
//   "message": "",
//   "zoneName": "Asia/Kolkata",
//   "formatted": "2025-05-25 14:56:03"
// }
// 🚨 Notes:
// The free plan allows limited number of API requests per day (~1 request/second).

// If you exceed the rate limit, the API will return an error.

// Use caching (like you’re doing with @Cacheable) to reduce repeated calls and stay within limits.

