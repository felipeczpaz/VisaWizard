/************************************************************
 *                                                          *
 *                     FlowHooks - All Rights Reserved      *
 *              (c) 2019-2025 FlowHooks Software LTDA.     *
 *                                                          *
 *  This software is proprietary and confidential.          *
 *  Unauthorized use, reproduction, or distribution is      *
 *  strictly prohibited.                                     *
 *                                                          *
 ************************************************************/

// ==UserScript==
// @name         VisaWizard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Simplify your US Visa application process with automated checkbox selection, saving time and ensuring accuracy.
// @author       Felipe Cezar Paz (https://github.com/felipeczpaz)
// @match        https://ceac.state.gov/GenNIV/General/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function runScript() {
    const elementsToCheck = [
      "rblDisease_1",
      "rblDisorder_1",
      "rblDruguser_1",
      "rblArrested_1",
      "rblControlledSubstances_1",
      "rblProstitution_1",
      "rblMoneyLaundering_1",
      "rblHumanTrafficking_1",
      "rblAssistedSevereTrafficking_1",
      "rblHumanTraffickingRelated_1",
      "rblIllegalActivity_1",
      "rblTerroristActivity_1",
      "rblTerroristSupport_1",
      "rblTerroristOrg_1",
      "rblTerroristRel_1",
      "rblGenocide_1",
      "rblTorture_1",
      "rblExViolence_1",
      "rblChildSoldier_1",
      "rblReligiousFreedom_1",
      "rblPopulationControls_1",
      "rblTransplant_1",
      "rblImmigrationFraud_1",
      "rblDeport_1",
      "rblRemovalHearing_1",
      "rblFailToAttend_1",
      "rblVisaViolation_1",
      "rblChildCustody_1",
      "rblVotingViolation_1",
      "rblRenounceExp_1",
      "rblAttWoReimb_1",
    ];

    elementsToCheck.forEach((elementId) => {
      const element = document.getElementById(
        `ctl00_SiteContentPlaceHolder_FormView1_${elementId}`
      );
      if (element) {
        element.checked = true;
      }
    });

    const updateButton = document.getElementById(
      "ctl00_SiteContentPlaceHolder_UpdateButton3"
    );
    if (updateButton) {
      updateButton.click();
    }
  }

  // Create and append button to run the script
  function addButton() {
    const button = document.createElement("button");
    button.textContent = "Fill Form";
    button.style.position = "fixed";
    button.style.top = "20px";
    button.style.right = "20px";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
    button.style.fontFamily = "Arial, sans-serif";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.addEventListener("click", runScript);
    document.body.appendChild(button);
  }

  // Call the addButton function to add the button when the page loads
  addButton();
})();
