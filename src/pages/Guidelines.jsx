import React from 'react';

const SectionHeading = ({ title }) => (
  <div className="text-center mb-6">
    <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    <div className="flex justify-center mt-2">
      <div className="w-24 h-0.5 bg-gray-300 relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-0.5 bg-red-600" />
      </div>
    </div>
  </div>
);

const Guidelines = () => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Author's Guidelines Section */}
      <section className="mb-10 border border-gray-300 rounded-xl shadow-md p-6 bg-white">
        <SectionHeading title="GUIDELINE" />
        <h3 className="text-xl font-semibold mb-4 text-left">AUTHOR'S GUIDELINES</h3>
        <p className="mb-4 text-sm sm:text-base">
          At least one author of an accepted paper must register and present his/her paper in the conference. Prospective authors are invited to submit paper(s) within 6 pages written in A4 size covered under normal registration. Extra page charges apply beyond 6 pages.
        </p>
        <ul className="list-disc list-inside text-blue-600 mb-4">
          <li>
            <a
              href="/assets/pdf/camera-ready-template.doc"
              download
              className="hover:underline"
            >
              IEEE Paper Template for Camera Ready Paper
            </a>
          </li>
          <li>
            <a
              href="/assets/pdf/iceect2024-Conference-template-a4 (1).docx"
              download
              className="hover:underline"
            >
              Download Paper Template (Microsoft Word)
            </a>
          </li>
          <li>
            <a
              href="/assets/pdf/IEEEtran_HOWTO.pdf"
              download
              className="hover:underline"
            >
              Download Paper Template Instructions (LaTeX)
            </a>
          </li>
          <li>
            <a
              href="/assets/pdf/conference-latex-template_10-17-19.zip"
              download
              className="hover:underline"
            >
              Download LaTeX Template (ZIP, 700 KB)
            </a>
          </li>
          <li>
            <a
              href="/assets/pdf/IEEE-Reference-Format.bib"
              download
              className="hover:underline"
            >
              Download LaTeX Bibliography Files (ZIP, 309 KB)
            </a>
          </li>
        </ul>
      </section>

      {/* Manuscript Preparation Section */}
      <section className="mb-10 border border-gray-300 rounded-xl shadow-md p-6 bg-white">
        <SectionHeading title="MANUSCRIPT PREPARATION" />
        <p className="mb-4 text-sm sm:text-base">
          The manuscript should be prepared in IEEE format using MS WORD and/or LaTeX template. The figures/graphs/plots in the manuscript MUST be of good resolution (600 dpi or more), tables MUST NOT be in pictorial format. Text in figures should not be too small, and preferably of equal size as text of the article.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          Figures, text, or the tables MUST be visible within the boundary of the text area of the page and MUST NOT go beyond it.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          Do NOT use any Social/Academic titles (e.g., Mr., Ms., Dr., Prof., etc.) preceding the author names. Do NOT mention the position of a person (e.g., research scholar, student, assistant professor, professor, IEEE member, IEEE student member, etc.) in the affiliation.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          Mention full address, affiliation, and email of ALL authors, and specify a corresponding author with the corresponding e-mail ID.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          Articles must be written in spell-checked and grammatically correct English.
        </p>
        <p className="mb-4 text-sm sm:text-base">
          All references, figures, and tables should be numbered in sequence starting from 1 and MUST be duly cited/referred within the text.
        </p>
        <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
          <li>All manuscripts should be unpublished and original work of authors.</li>
          <li>Maximum allowed pages while submitting the manuscript is 6 in double-column format.</li>
          <li>Keep the plagiarism below 15% for IEEE consideration.</li>
          <li>The paper should be properly structured with clear motivation and captured elements of Contribution/Methods, Results, Discussions, and Conclusions.</li>
          <li>Any modification in the paper will not be accepted after the final submission date.</li>
          <li>Registration after the deadline is not allowed.</li>
          <li>Only presented papers will be submitted to IEEE Xplore for publication.</li>
        </ul>
      </section>
    </div>
  );
};

export default Guidelines;
