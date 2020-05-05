import React from 'react';

import './styles.css';

export default function Questionnaire() {

    return (
        <div className="box-container">
            <form>
                <h2>Before we get started, let us know a little more about yourself...</h2>
                <div className="content">

                    <div className="column1">
                        <a>1. What is the color of your skin?</a>
                        <select id="q1">
                            <option value="1">Very fair, ivory white</option>
                            <option value="2">Fair</option>
                            <option value="3">Light brown</option>
                            <option value="4">Dark brown</option>
                            <option value="5">Black</option>
                        </select>
                        <a>2. What is the natural color of your hair, that which you had when you were 20 years old?</a>
                        <select id="q2">
                            <option value="1">Red</option>
                            <option value="2">Blonde</option>
                            <option value="3">Light or medium brown</option>
                            <option value="4">Dark brown</option>
                            <option value="5">Black</option>
                        </select>
                        <a>3. What is the color of your eyes?</a>
                        <select id="q3">
                            <option value="1">Blue</option>
                            <option value="2">Green</option>
                            <option value="3">Light brown</option>
                            <option value="4">Dark brown</option>
                            <option value="5">Black</option>
                        </select>
                        <a>4. Does your skin turn red after being exposed to the sun without any protection?</a>
                        <select id="q4">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>5. Do you have a close relative (father, mother, siblings) who has or has had skin cancer?</a>
                        <select id="q5">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>6. Have you ever had skin cancer?</a>
                        <select id="q6">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>7. About how many moles do you have in your body?</a>
                        <label for="moles">Moles (0 to 100+):</label>
                        <input type="range" id="q7" name="moles" min="0" max="100"></input>
                        <a>8. Sunburn is a painful reddening of the skin lasting more than 12h, after exposure to the sun. Have you ever suffered any sunburn?</a>
                        <select id="q8">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>9. Up ot date, have you ever had any outdoor job?</a>
                        <select id="q9">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                    </div>

                    <div className="column2">
                        <a>10. Have you ever lived or do you live in a geographical zone with intense sun, such as the beach, desert or mountain?</a>
                        <select id="q10">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>11. Do you practise or have ever practised any outdoor recreation activity?</a>
                        <select id="q11">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>12. Have you ever used tanning lamps or beds?</a>
                        <select id="q12">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>13. Have you ever received any organ transplant (for example: kidney, liver, heart, lung or pancreas)?</a>
                        <select id="q13">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>14. Have you received any radiotherapy treatment for cancer?</a>
                        <select id="q14">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>15. Have you received any phototherapy treatment or some skin condition?</a>
                        <select id="q15">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>16. During your vacations, do you go to the beach?</a>
                        <select id="q16">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <a>17. Have you ever consumed well water for 10 years or more?</a>
                        <select id="q17">
                            <option value="True">Yes</option>
                            <option value="False">No</option>
                        </select>
                        <button type="submit" className="buttonQ">Send</button>
                    </div>

                </div>
            </form>
        </div>
    );
}