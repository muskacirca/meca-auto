'use strict'

import React from 'react'
import Calendar from './calendar/Calendar'

var CLIENT_ID = '1026973050796-k1k88b9umrhkckd7v9en1kfjr2l9iern.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

class Booking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }
    
    componentDidMount() {
        this.checkAuth()
    }

    /**
     * Check if current user has authorized this application.
     */
    checkAuth() {
        gapi.auth.authorize(
            {
                'client_id': CLIENT_ID,
                'scope': SCOPES.join(' '),
                'immediate': true
            }, this.handleAuthResult.bind(this));
    }

    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    handleAuthResult(authResult) {
        var authorizeDiv = document.getElementById('authorize-div');
        if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            authorizeDiv.style.display = 'none';
            this.loadCalendarApi();
        } else {
            // Show auth UI, allowing the user to initiate authorization by
            // clicking authorize button.
            authorizeDiv.style.display = 'inline';
        }
    }

    /**
     * Initiate auth flow in response to user clicking authorize button.
     *
     * @param {Event} event Button click event.
     */
    handleAuthClick(event) {
        gapi.auth.authorize(
            {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
            this.handleAuthResult.bind(this));
        return false;
    }

    /**
     * Load Google Calendar client library. List upcoming events
     * once client library is loaded.
     */
    loadCalendarApi() {
        gapi.client.load('calendar', 'v3', this.listUpcomingEvents.bind(this));
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    listUpcomingEvents() {

        var request = gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        });

        request.execute((resp) => {
            var events = resp.items;
            console.log("events : " + JSON.stringify(events));
            
            this.setState({events: events})

        });
    }
    
    render() {
        return  <div>
                    <div id="authorize-div"></div>
                    <Calendar events={this.state.events}/>
                    
                </div>
    }
}

Booking.propTypes = {

};

export default Booking
