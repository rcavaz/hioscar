import { SelectorsMap } from "../../../lib/basePage";

export const selectors: SelectorsMap = {
    btnFindDoctorsAndDrugs: 'text=Find doctors & drugs',
    btnSearchNetwork: 'button:has-text("Search network")',

    dropDownSelectaNetwork: '.Dropdown_visibleContent__NGHUm',
    firstOptionCoverageYear: '[aria-label="\\32 022"]',

    dropDownCoverageAccess: 'div:nth-child(5) > .ContainedItem_item__2QPeQ > .AnatomyBaseStyles_anatomyStyles__2jo1e > .Dropdown_innerContainer___YGZc > .DropdownOverlayHeader_overlayContainer__2PCwW > .Dropdown_visibleContent__NGHUm',
    secondOptionCoverageAccess: '[id="SMALL_GROUPEmployer-provided"]',
    // secondOptionCoverageAccess: 'text=Employer-provided',

    dropDownNetworkPartner: 'div:nth-child(7) > .ContainedItem_item__2QPeQ > .AnatomyBaseStyles_anatomyStyles__2jo1e > .Dropdown_innerContainer___YGZc > .DropdownOverlayHeader_overlayContainer__2PCwW > .Dropdown_visibleContent__NGHUm',
    firstOptionNetworkPartner: '[aria-label="Oscar"]',

    dropDownCoverageArea: 'div:nth-child(9) > .ContainedItem_item__2QPeQ > .AnatomyBaseStyles_anatomyStyles__2jo1e > .Dropdown_innerContainer___YGZc > .DropdownOverlayHeader_overlayContainer__2PCwW > .Dropdown_visibleContent__NGHUm',
    firstOptionCoverageArea: 'text=California - Southern California',

    btnContinue: 'button:has-text("Continue")',
};
