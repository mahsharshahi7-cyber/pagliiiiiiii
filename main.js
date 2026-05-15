document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('input[type="submit"]');
    const tableRows = document.querySelectorAll('tr');

    // 1. Form Validation: Check karna ki fields bhari hain ya nahi
    form.addEventListener('submit', (e) => {
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;
        const city = document.querySelector('select[name="city"]').value;

        if (username === "" || password === "") {
            e.preventDefault(); // Form submit hone se rokna
            alert("Oops! Username aur Password bharna zaroori hai. ✋");
        } else {
            alert(`Shukriya ${username}! Aapka form submit ho raha hai. City: ${city}`);
        }
    });

    // 2. Table Rows Par Click karne par Highlight karna
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            // Pehle sabse background hatao
            tableRows.forEach(r => r.style.backgroundColor = "");
            // Click waali row ko highlight karo
            row.style.backgroundColor = "#ffeaa7";
            console.log("Selected Row: " + row.innerText);
        });
    });

    // 3. List items par ek chhota sa effect
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transition = "0.3s";
            item.style.paddingLeft = "10px";
        });
        item.addEventListener('mouseout', () => {
            item.style.paddingLeft = "0px";
        });
    });

    // 4. Video error handling (agar link purana ho)
    const video = document.querySelector('video');
    video.addEventListener('error', () => {
        console.log("Video load nahi ho saki, sahi URL check karein.");
    });
});