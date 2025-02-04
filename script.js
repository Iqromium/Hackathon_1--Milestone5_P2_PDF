"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
//listing element
(_a = document
    .getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //Getting each elements of the form:
    const profilePictureInput = document.getElementById("profilePicture");
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const educationElement = document.getElementById("education");
    const experienceElement = document.getElementById("experience");
    const skillsElement = document.getElementById("skills");
    //ensuring elements are present:
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        //Getting each values of the form:********************************************************************** */
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        // elements of profile image
        const profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : '';
        //making html output of resume
        const resumeHTML = `
<h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Image" class="profilePicture">`
            : ''}
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone Number:</strong> ${phone}</p>
<h3>Education</h3>
<p>${education}</p>
<h3>Experience</h3>
<p>${experience}</p>
<h3>Skills</h3>
<p>${skills}</p>
`;
        //display of resume output:
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("hidden");
            //coding for buttons:
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            //coding for Milestone 5 addition - Download PDF requirements:
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download in PDF";
            downloadButton.addEventListener("click", () => {
                window.print(); // this will open 'print dialog' so that we can save in PDF. 
            });
            buttonsContainer.appendChild(downloadButton);
            //Shareable Link button:
            const shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy Shareable Link";
            shareableLinkButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                try {
                    //trigger the creation of a unique shareable link:
                    const shareableLink = `${window.location.origin}/resume/${name.replace(/\s+/g, "_")}_resume.html`;
                    //use the 'navigator clipbord Api' to copy the above sharable link:
                    yield navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link is now copied to clipboard!");
                }
                catch (error) {
                    console.error("Failure in copying link to clipboard ;(", error);
                    alert("Failure in copying link to clipboard. Re-click to try again!");
                }
            }));
            buttonsContainer.appendChild(shareableLinkButton);
        }
        else {
            console.error(" Resume output container not found");
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
    ;
});
