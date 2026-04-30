import { AlertTriangle } from "lucide-react";

const threats = [
  ''
];

export default function ThreatTicker() {
  return (
    <div className="">
      <div className="">
        <div className="">
          {threats.map((threat, i) => (
            <span key={i} className="">
              {threat}
            </span>
          ))}
          {/* Duplicate for infinite loop */}
          {threats.map((threat, i) => (
            <span key={`dup-${i}`} className="">
              {threat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
