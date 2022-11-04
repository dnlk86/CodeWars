// Human readable duration format
class HumanReadableDurationFormat {
    static formatDuration(seconds) {
        if (seconds === 0) {
            return "now";
        }

        let y = Math.floor(seconds / 31536000);
        let d = Math.floor((seconds - y * 31536000) / 86400);
        let h = Math.floor((seconds - y * 31536000 - d * 86400) / 3600);
        let m = Math.floor(
            (seconds - y * 31536000 - d * 86400 - h * 3600) / 60
        );
        let s = seconds % 60;
        let res = [
            ["year", y],
            ["day", d],
            ["hour", h],
            ["minute", m],
            ["second", s],
        ]
            .map((v) =>
                v[1] > 1
                    ? `${v[1]} ${v[0]}s`
                    : v[1] === 1
                    ? `${v[1]} ${v[0]}`
                    : ""
            )
            .filter((v) => v !== "")
            .join(", ");
        let lastComma = res.lastIndexOf(",");

        return lastComma !== -1
            ? res.substring(0, lastComma) +
                  " and" +
                  res.substring(lastComma + 1)
            : res;
    }
}

module.exports = HumanReadableDurationFormat;
