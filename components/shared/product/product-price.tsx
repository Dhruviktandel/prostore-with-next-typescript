import { cn } from "@/lib/utils";

const Productprice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Ensure two decimal places
  const stringValue = value.toFixed(2);
  // Get the int/float
  const [intvalue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intvalue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default Productprice;
