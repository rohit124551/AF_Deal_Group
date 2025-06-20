# AF Deal Payment Tracker

## Overview
This is a modern, mobile-friendly web app for tracking and searching payment deals. It allows users to search by Email, Order ID, or WhatsApp Number, view results in a responsive table, export data, and customize visible columns.

## Features
- **Search by Email, Order ID, or WhatsApp Number**
- **Responsive UI**: Works on desktop and mobile
- **Show/Hide Columns**: Select which columns to display
- **Export to PDF/Excel**: Download results
- **Total Cashback Calculation**
- **Loading Animation** for searches
- **Dark/Light Theme Toggle**
- **Mobile Table Scrolling**
- **Column Sorting**

## How to Use
1. **Open the app in your browser.**
2. **Select a search type** (Email, Order ID, WhatsApp Number).
3. **Enter a value** and click **Search**.
4. **View results** in the table. Use the "Show/Hide Columns" button to customize columns.
5. **Export** results using the PDF/Excel buttons.
6. **Clear** to reset the search and UI.

## Technologies Used
- **HTML5, CSS3, JavaScript (Vanilla)**
- **jsPDF** and **jsPDF-AutoTable** (PDF export)
- **SheetJS (xlsx)** (Excel export)
- **Google Apps Script Web API** (for backend data)

## Customization
- **Add/Remove Columns**: Adjust the backend or JS to change columns.
- **Change Theme**: Edit CSS for new color schemes.
- **API Endpoint**: Update the fetch URL in `searchNow()` for your backend.


---

*This project is designed for easy deployment and customization for any payment tracking or order search workflow.* 
# Website Structure Diagram

```mermaid
graph TD
    A["AF Deal Payment Tracker (index.html)"]
    A --> B["Header & Theme Toggle"]
    A --> C["Search Form"]
    C --> C1["Search Type Dropdown"]
    C --> C2["Search Value Input"]
    C --> C3["Search & Clear Buttons"]
    A --> D["Show/Hide Columns Dropdown"]
    D --> D1["Column Checkboxes"]
    A --> E["Results Table"]
    E --> E1["Table Rows/Columns"]
    A --> F["Export Buttons"]
    F --> F1["PDF Export"]
    F --> F2["Excel Export"]
    A --> G["Total Cashback Display"]
    A --> H["Mobile Responsiveness"]
    A --> I["Loading Animation"]
``` 