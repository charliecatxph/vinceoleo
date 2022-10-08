// images
import TSV from "../assets/technical-services.jpg";

// next-image
import Image from "next/image";

export default function TechServices() {
  return (
    <section className="technical-services">
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1>Technical Services</h1>
          </div>
          <div className="tech-serv-main">
            <div className="tech-infos">
              <figure className="image">
                <Image src={TSV} alt="TSV" />
              </figure>
              <ul>
                <li>Oils Fats R&#38;D /QC Laboratory set up</li>
                <li>Product Development (specialty Fats and Oils)</li>
                <li>Existing Product Modification</li>
                <li>New Product Formulation</li>
                <li>Cost reduction (existing products)</li>
                <li>Quality Control/Quality Assurance</li>
                <li>
                  Documentation Assistance(HACCP, GMP, HALAL Organic, etc.)
                </li>
                <li>Existing Oils &#38; Laboratory Assessment</li>
                <li>
                  Oils &#38; Fats Processing (Oil Milling, Refining,
                  Modification)
                </li>
                <li>Virgin Coconut Oil Processing plant set up</li>
                <li>VCO R&#38;D/QC Laboratory set up</li>
                <li>Basic Oils &#38; Fats Seminar</li>
                <li>Special Oils &#38; Fats Seminar (various subjects)</li>
                <li>Oils &#38; Fats Trouble Shooting(QC/QA)</li>
                <li>Oils &#38; Fats Trouble Shooting(R&#38;D)</li>
                <li>Oils &#38; Fats Applications</li>
                <li>Healthier Oils &#38; Fats</li>
                <li>Oils &#38; Fats Marketing/Technical Services</li>
                <li>Biofuels Technology</li>
                <li>Nutraceuticals Product Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
