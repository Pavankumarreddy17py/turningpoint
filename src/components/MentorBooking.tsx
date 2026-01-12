import { InlineWidget } from "react-calendly";

export function MentorBooking() {
  return (
    <div className="w-full h-[700px] rounded-3xl overflow-hidden border-4 border-black">
      <InlineWidget
        url="https://calendly.com/hjr-mentor/30min"
        styles={{ height: "700px" }}
      />
    </div>
  );
}
