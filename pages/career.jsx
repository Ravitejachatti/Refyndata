import { useState } from 'react';
import careersData from '@/data/careers.json';
import RootLayout from '@/app/layout';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(careersData.careers[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    qualification: '',
    resume: '',
    message: ''
  });

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form data after submission
        setFormData({
          name: '',
          email: '',
          contact: '',
          qualification: '',
          resume: '',
          message: ''
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <RootLayout>
      <div className="container mx-auto p-4">
        <div className="mb-10">
          <h1 className="text-md font-bold">Home / Careers</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Table (Mobile first) */}
          {/*  <div className="w-full p-5 border border-rounded">
                            <p className="px-5 py-3 pb-5 font-semibold">Contents</p> */}
          <div className="border md:hidden col-span-1"> 
          <div className="w-full p-5 border border-rounded">
          <p className="px-5 py-3 pb-5 font-semibold">Contents</p>
            <table className="  table-auto"> 
           
              <tbody>
                  
                {careersData.careers.map((job, index) => (
                  <tr key={index} onClick={() => handleJobSelect(job)} className="cursor-pointer hover:bg-gray-200">
                 
                    <td className=" px-4 py-2">{job.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div></div>
          {/* Content (Desktop and Tablet) */}
          <div className="hidden md:block col-span-2">
            <div className="flex ">
              {/* Left Column (30%) */}
              <div className=" w-1/3 p-4 m-5"> 
              <div className='border '>
              <p>contents</p>
                <table className="table-auto">
                  <tbody>
                 
                    {careersData.careers.map((job, index) => (
                      <tr key={index} onClick={() => handleJobSelect(job)} className="cursor-pointer hover:bg-gray-200"> 
                     
                        <td className=" px-4 py-2">{job.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              </div>
              {/* Right Column (70%) */}
              <div className="w-full">
                <div>
                  <h2 className='text-3xl font-bold text-gray-800'>Careers</h2>
                  <p className="border-t border-gray-600 my-3"></p>
                  <h3 className="text-xl font-semibold mb-2">{selectedJob.name}</h3>
                  <p><strong>Location:</strong> {selectedJob.location}</p>
                  <p><strong>Responsibilities:</strong></p>
                  <ul>
                    {selectedJob.responsibilities.map((responsibility, index) => (
                      <li key={index}>• {responsibility}</li>
                    ))}
                  </ul>
                  <p><strong>Minimum Qualification: <br></br></strong> • {selectedJob.minimumQualification}</p>
                  <p><strong>Special Qualifications:</strong></p>
                  <ul>
                    {selectedJob.specialQualifications.map((qualification, index) => (
                      <li key={index}>• {qualification}</li>
                    ))}
                  </ul>
                  <p><strong>Requirements:</strong></p>
                  <ul>
                    {selectedJob.requirements.map((requirement, index) => (
                      <li key={index}>• {requirement}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Apply for this position</h3>
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className=" border form-input mt-1 block w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="border form-input mt-1 block w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Contact (with country code)</label>
                        <input
                          type="text"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          className=" border form-input mt-1 block w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                        <input
                          type="text"
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          className="border form-input mt-1 block w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Send Resume (File)</label>
                        <input
                          type="file"
                          name="resume"
                          onChange={handleChange}
                          className="border form-input mt-1 block w-full"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Write your message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="border form-textarea mt-1 block w-full"
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="bg-[#0079A0] text-white border border-rounded btn btn-primary w-full">Send</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Careers;
