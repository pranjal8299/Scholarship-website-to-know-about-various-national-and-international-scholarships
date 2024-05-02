let scholarships = [
    {
        description: "University of Sheffield International UG Merit Scholarship 2024",
        country: "UK",
        state: "South Yorkshire",
        category: "all",
        gender: "everyone",
        class: "Graduation",
        company: "",
        university: "",
        visit_website: "https://www.sheffield.ac.uk/international/fees-and-funding/scholarships/undergraduate/international-undergraduate-merit-scholarship",
        information: "https://s3-ap-southeast-1.amazonaws.com/cdn.buddy4study.com/static/scholarship_docs/download-form_1HbfBF.pdf",
        photo: "phtos/3.jpg"
    },
    {
        description: "British Council Scholarship for Women in STEM 2024",
        country: "UK",
        state: "brisbane",
        category: "all",
        gender: "F",
        class: "phd",
        company: "",
        university: "",
        visit_website: "https://www.britishcouncil.in/study-uk/scholarships/womeninstem-scholarships",
        pwd: "yes",
        information: "https://scholarships.gov.in/public/schemeGuidelines/DEPDGuidelines_1.pdf",
        photo: "phtos/3.jpg"
    }
];
function search() {
    let countryInput = document.getElementById('countryInput').value.toUpperCase();
    let matchedScholarships = scholarships.filter(scholarship => scholarship.country && scholarship.country.toUpperCase() === countryInput);

    if (countryInput === '') {
        displayAllScholarships();
    } else {
        displayScholarships(matchedScholarships.length > 0 ? matchedScholarships : []);
    }
}

function displayAllScholarships() {
    let allScholarships = scholarships.filter(scholarship => scholarship.country); 
    displayScholarships(allScholarships);
}

function displayScholarships(scholarshipsToDisplay) {
    let linksContainer = document.getElementById('linksContainer');
    if (!linksContainer) {
        linksContainer = document.createElement('div');
        linksContainer.id = 'linksContainer';
        document.body.appendChild(linksContainer);
    } else {
        linksContainer.innerHTML = ''; 
    }

    scholarshipsToDisplay.forEach(scholarship => {
        let container = document.createElement('div');
        container.classList.add('image-container');

        let image = document.createElement('img');
        image.src = scholarship.photo;

        let textOverlay = document.createElement('div');
        textOverlay.classList.add('text-overlay');
        textOverlay.innerHTML = `
            <p>Description: ${scholarship.desc}</p>
            <p>State: ${scholarship.state}</p>
            <p>Category: ${scholarship.category}</p>
            <p>Gender: ${scholarship.gender}</p>
            <p>Class: ${scholarship.class}</p>
            <p>Country: ${scholarship.country || 'N/A'}</p>
            <p><a href="${scholarship.visit_website}" target="_blank">Visit Website</a></p>
        `;

        container.appendChild(image);
        container.appendChild(textOverlay);
        linksContainer.appendChild(container);
    });

    if (scholarshipsToDisplay.length === 0) {
        let noResultMessage = document.createElement('p');
        noResultMessage.textContent = 'There are no scholarships available for the entered country.';
        linksContainer.appendChild(noResultMessage);
    }
}
displayAllScholarships();
