# PDF File Management

This project is a user interface (UI) application designed for efficient management of PDF files. It offers a variety of features to streamline the process, including:

## Features

1. **Upload PDF File**
   - Click the "Add PDF" button to select and upload a PDF file.
   - The application will only accept PDF files; in case any other file type is chosen, an alert will prompt the user to select a PDF file.
   - A modal window will open, displaying a preview of the selected PDF file.
   - Inside the modal, users have the option to save the file or cancel the operation.
   - Clicking "Cancel" will close the modal.

2. **File Storage**
   - When the "Submit" button is clicked, the selected PDF file is saved on  cloudinary.
   - Along with the file, the following details are saved in the database:
     - Filename
     - Upload timestamp
     - File size
     - publicId
     - secureUrl

3. **List of PDF Files**
   - The UI displays boxes representing all the uploaded PDF files.
   - Each box includes the name of the PDF file, its size, and data in a visually organized format.
   - Data for these files is retrieved through an API and stored in Redux, allowing it to be seamlessly displayed on the UI.

4. **PDF Preview and Deletion**
   - Clicking on any of the listed PDF files will open a preview of that PDF.
   - Within the preview, users have options to delete the file or close the preview.
   - Clicking "Close" will promptly close the PDF preview.
   - Clicking "Delete" will initiate an API call to remove the file data from the database and cloudinary.

5. **Sorting**
   - There should be a dropdown for sorting options.
   - By default, no sorting is applied.
   - Users can choose to sort the files by name, size, or date by selecting the respective option in descending order.