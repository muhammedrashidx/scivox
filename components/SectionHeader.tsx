interface SectionHeaderProps {
  title: string;
  showSeeAll?: boolean;
}

const SectionHeader = ({ title, showSeeAll = true }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h2 className="text-2xl font-bold font-display">{title}</h2>
      {showSeeAll && (
        <a 
          href="#" 
          className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
        >
          See all
        </a>
      )}
    </div>
  );
};

export default SectionHeader;

