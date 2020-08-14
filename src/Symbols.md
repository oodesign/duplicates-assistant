# duplicate-symbols

Having symbol masters with the same name (in local file or linked libraries) is considered a
violation.

Report details:

- Total number of duplicate symbols (including linked libraries)
- 💎 Number of duplicate symbols in the file
- 💎🔶 Number of symbols that exist both in the file and in linked libraries
- 🔶 Number of duplicate symbols in linked libraries

## Rationale

Duplicates may lead to inconsistent designs and complicate maintainability. They also make it harder
to operate the design file.

## Options

None.
