import './index.sass'

export default function Pagination({currentPage, contentPerPage, totalContent, paginate}) {
    const totalPages = Array.from({length: Math.ceil(totalContent / contentPerPage)}, (_, i) => i + 1);

    function doScrolling(elementY, duration) {
        const startingY = window.pageYOffset;
        const diff = elementY - startingY;
        let start;

        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            // Elapsed milliseconds since start of scrolling.
            const time = timestamp - start;
            // Get percent of completion in range [0, 1].
            const percent = Math.min(time / duration, 1);

            window.scrollTo(0, startingY + diff * percent);

            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        })
    }

    return (
        <ul className="pagination">
            {totalPages.map(number => {
                return<li className={`pagination-item ${number === currentPage ? "pagination-item-active" : ""}`} onClick={() => {
                    paginate(number);
                    doScrolling(100, 1000)
                }}>{number}</li>
            })}
        </ul>
    )

}