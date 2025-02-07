const RezSelect = () => {
    return (
        <section>
            <fieldset class="rezselect">
                <div class="add-border">
                    <label for="guests">Guests</label><br/>
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
                </div>
                <div class="add-border">
                    <label for="date">Date</label><br/>
                    <input type="date" id="date" name="date"></input>
                </div>
                <div>
                    <label for="time">Time</label><br/>
                    <input type="time"></input>
                </div>
            </fieldset>

            <section class="date-time-ranges">
                <button>
                    <h2>12:00 PM</h2>
                </button>
                <button>
                    <h2>12:15 PM</h2>
                </button>
                <button>
                    <h2>12:30 PM</h2>
                </button>
                <button>
                    <h2>12:45 PM</h2>
                </button>
                <button>
                    <h2>1:00 PM</h2>
                </button>
                <button>
                    <h2>1:15 PM</h2>
                </button>
                <button>
                    <h2>1:30 PM</h2>
                </button>
                <button>
                    <h2>1:45 PM</h2>
                </button>
                <button>
                    <h2>2:00 PM</h2>
                </button>
                <button>
                    <h2>2:15 PM</h2>
                </button>
                <button>
                    <h2>2:30 PM</h2>
                </button>
                <button>
                    <h2>2:45 PM</h2>
                </button>
            </section>
        </section>
    )
}

export default RezSelect;