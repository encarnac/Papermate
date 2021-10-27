import React from 'react';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h1>Papermate</h1>
            <p class="home-intro-text">Survey data showed that the number of adults who did not read books in one year rose
                from 8% in 1978 to 23% in 2021. Another study found that 80% of teenagers do not read for
                pleasure. To compound these issues is the phenomenon coined by psychologists as “The
                Paradox of Choice”, which describes how more options result in analysis paralysis and
                dissatisfaction with decisions. To promote reading in young adults in the digital age and remove
                the obstacle of finding a good book, Papermate offers a monthly subscription service for
                hardcover books from a curated list of praised novels. The website’s database will allow
                Members to save multiple Payment Methods and renew their subscription by paying
                Subscription Bills every month. With an active subscription and depending on the tier chosen
                (ranging from one to four books costing $12, $20, $30, or $40 a month), a Member can select
                their Book(s) and have it shipped to their address. Members are also able to leave Reviews for
                Books and join Discord servers corresponding to different Genres, further promoting a sense of
                community by connecting people with similar tastes. Papermate is a small start-up, averaging
                1,000 active users per month and a selection of 5 books from 11 possible genres available every
                month. For now, communication between members is outsourced to Discord but future plans
                exist to incorporate message boards.
            </p>
        </>
    )
}

export default HomePage;