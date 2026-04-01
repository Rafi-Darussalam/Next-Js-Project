import FooterLinksComp from "./FooterLinksComp";

const firstLink = [
  {title: "LEGAL NOTES", page: ""},
  {title: "SUSTINABBILITY", page: ""},
  {title: "NEWSLETTER", page: ""},
]

const secondLink = [
  {title: "CONTACT US", page: ""},
  {title: "SITEMAPS", page: ""},
  {title: "DEALERS", page: ""},
]

const thirdLink = [
  {title: "SANT'AGATA BOLOGNESE, ITALY", page: ""},
]

export default function FooterLink({ className }: {
  className?: string
}) {
  return (<>
    <FooterLinksComp title="COMPANY" linkArr={firstLink} className={`${className}`} />
    <FooterLinksComp title="CONNECT" linkArr={secondLink} className={`${className}`} />
    <FooterLinksComp title="LOCATION" linkArr={thirdLink} className={`${className}`} />
  </>)
}