const RezSelect = () => {
    return (
        <section>
            <label for="guests">Guests:</label><br/>
            <select>
                <option value="one">1 person</option>
                <option value="two">2 people</option>
                <option value="three">3 people</option>
                <option value="four">4 people</option>
                <option value="five">5 people</option>
                <option value="six">6 people</option>
                <option value="seven">7 people</option>
                <option value="eight">8 people</option>
                <option value="nine">9 people</option>
                <option value="ten">10 people</option>
                <option value="eleven">11 people</option>
                <option value="twelve">12 people</option>
            </select>

            <label for="date">Date:</label><br/>
            <input type="date" id="date" name="date"></input>

            <label for="time">Time:</label><br/>
            <input type="time"></input>
        </section>
    )
}

export default RezSelect;