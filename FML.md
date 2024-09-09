# Flow/Flowchart Markup Language (FML)

This is a markup language for generating and marking down flowcharts programmatically, focusing on Blocks, connections, and collaboration between users. The system is defined in two main parts:

- **Block Definition**: Contains all the details related to the Blocks.
- **Connection Definition**: Links Blocks together to form the flow of the flowchart.

## Block Definition

Each Block is defined with unique attributes such as 

- Type/Class
- Size
- Position
- Color
- Path
    - Goto Line Start
    - Goto Line End
- Parameter
    - Parameter Name
    - Parameter DataType
    - Parameter Scope `Not sure if this is needed`
    - Parameter Init Line
- Custom
- Comment

### Syntax:
```plaintext
S1(
    class: "<Type/Class>", 
    size: (<Width>, <Height>, <BoarderWidth>), 
    position: (<Width>, <Height>), 
    color: <BlockColor> & <BorderColor>, 
    path: "<Path>" @ <LineStart> - <LineEnd>, 
    parameter: ["<Name> * <DataType> * <Scope> * <InitLine>"], 
    custom: <Custom>, 
    comment: "<Comment>"
)
```

### Example:

```plaintext
S1(
    class: "idsquare", 
    size: (15,12,1), 
    position: (14,13), 
    color: #B040E0D0 & #000000, 
    path: "src/main/hello.py" @ 2-10, 
    Parameter: ["sum*num*public*4","check*nocap**5"], 
    comment: "This has to go to the top and am assigning @Joab to this task Specify the Blocks with <S2> and Connection -C2-"
)
```

### WHAT IF!!!
In the Parameter DataType rather than mentioning the actual term for 
- Number mention any number from `0-9`. eg: `3`
- Float mention any number with `.` eg: `6.9`
- Character mention any character from `a-Z` except `f, F, t, T` (both Captial and Small will be taken as Character or this difference can be used in the future). eg: `f`
- String mention any string of characters except `False, false, True, true, obvi, duh, sus, cap, nocap`. eg: `bruh`
- Boolean mention `f, F, t, T, False, false, True, true, obvi, duh, sus, cap, nocap` can also include `1,0` have to think about the possibility, eg: `cap`
- List mention classic symbol []. It doesn't have to be that both together can be any one of them. eg: `]`
- Dictionary mention classic symbol {}. It doesn't have to be that both together can be any one of them. eg: `{`
- Tuple mention classic symbol (). It doesn't have to be that both together can be any one of them. eg: `)`
.
.
. Goes on...

### Block Parameters

- **S1**: Unique identifier for the Block. Automatically assigned in increasing order if not provided.
- **Type/Class**: The shape of the Block predefined CSS file is kinda like Bootstrap (e.g., `idsquare`, `idoval`, `idrect`, etc.).
- **Size**: `(Width, Height, Border)`. Defines the dimensions and border of the Block.
- **Position**: Position of the Block in the Canvas. It is represented by two Numeric values X and Y.
- **Color**: Box and border color defined in HEX format includes Alpha value (e.g., `#B040E0D0`).
- **Path**: Path of the source code or files related to the Block and the line which it has to navigate to when ctrl clicked.
- **Parameters**: Parameters are the variables defined in the function linked to the block `[]`.
- **Custom**: A Field open for Custom ideas in the future or user usage.
- **Comment**: Additional information for collaboration and other notes are wrapped in `""`. You can tag users using `@` and refer to other Blocks wrapped in `< >` and the Connections wrapped in `--`.

---

## Connection Definition

Connections define the flow between Blocks. Each connection is represented in the following format:

- Type/Class (Optional takes Default as value)
- Weight (Optional takes Default as value)
- Color (Optional takes Default as value)
- Tether `->`
    - Marco
    - Polo List
- Carrying Parameter (Optional takes None as value)
- Direction (Optional takes None as value)
- Comment (Optional)

### Syntax

Inline
```plaintext
C1(
    class: "<Type/Class>", 
    weight: <Weight>, 
    color: <Color>, 
    direction: <Direction>, 
    comment: "<Comment>"
    tether: "<Marco> -> [<Polo1>(Carrying Parameter), <Polo2>, <Polo3>(Carrying Parameter)]" !Polo List, Two or More has to be in []!
)
```
or
```plaintext
C1(
    class: "<Type/Class>", 
    weight: <Weight>, 
    color: <Color>, 
    direction: <Direction>, 
    comment: "<Comment>",
    tether: <Marco> -> <Polo1>(Carrying Parameter)
)
```

Internal
```plaintext
C1(
    class: "<Type/Class>", 
    weight: <Weight>, 
    color: <Color>, 
    direction: <Direction>, 
    comment: "<Comment>"
) 

C1 <Marco> -> [<Polo1>(Carrying Parameter), <Polo2>, <Polo3>(Carrying Parameter)] !Polo List, Two or More has to be in []!
C1 <Marco> -> <Polo1>(Carrying Parameter)
```

### Example:

Inline
```plaintext
C1(
    class: "idline", 
    weight: 3, 
    color: #000000, 
    comment: "This Connection carrys Variables",
    direction: ->,
    tether: "S1 -> [S2(check), S3]" !Connection from Block S1 to S2, Carrying Parameter name should match the Parameter Name in that respective Block definition!
)
```
or
```plaintext
C1(
    class: "idline", 
    weight: 3, 
    color: #000000, 
    comment: "This Connection carrys Variables",
    direction: <-,
    tether: "S1 -> [S2(check), S3]" !Connection from Block S1 to S2, Carrying Parameter name should match the Parameter Name in that respective Block definition!
)
```

Internal
```plaintext
C1(
    class: "iddotted", 
    weight: 3, 
    color: #000000, 
    comment: "This Connection carrys Variables",
    direction: <-
) 

C1 S1->S2(check),S3
```
or
```plaintext
C1(
    comment: "This Connection carrys Variables",
    direction: <->
) 

C1 S1->S2(sum),S3
```

- **C1**: Connection ID (if not provided, it is auto-generated).
- **S1->S2**: Connects Block `S1` to Block `S2`. Multiple connections can be defined using commas (e.g., `S1->S2,S3`).
- **!**: Everything inside the `!` is treated as a comment and will be ignored in the flowchart.

---

## Example

```plaintext
!Definition!
S1(TYUSY, idsquare, [ANY], (15,12,1), #B040E0D0, (14,13), "src/main/hello.py", 2, "This has to go to the top and am assigning @Joab to this task Specify the Blocks with <S2>")
S2(DFGST, idoval, [ANY], (10,7,1), #2BFFE0D0, (26,13), "src/main/hello.py", 5, "Correct the Connections *mention the connections with -C1-")
S3(WZPXB, idcircle, [ANY], (20,15,2), #FFB347D0, (30,18), "Circle Block is responsible for validation -C2-")
S4(KLOVR, idrect, [ANY], (25,20,1), #2E8B57D0, (45,25), "Process the data and forward it to the next step <S3>") !UID for the Block will be automatically assigned!
S5(NMVOP, idoval, [ANY], (18,10,1), #FFD700D0, (60,40), "Oval Block handles the decision-making part -C3-")

!Connection!
C1 S1->S2 !Connection from Block S1 to S2!
C2 S5->S4 !This connection leads from Block S5 to S4!
C3 S4->S3 !S4 connects to S3 for further processing!
C4 S3->S8 !Circle Block connects to the rectangular input capture Block!
C5 S8->S9 !Block S8 forwards input to S9 for further decision-making!
```

---

## Syntax Breakdown

1. **Block Syntax**:
    - Blocks are created with specific properties such as size, color, position, and custom parameters.
    - Comments can be added using `!`.

2. **Connection Syntax**:
    - Define connections using `S1->S2`.
    - Connections can include multiple links (e.g., `S1->S2,S3`).
    - Comments related to connections are defined using `!`.

---

## Symbols and Tags

- **@**: Used to tag users for collaboration or task assignment (e.g., `@Joab`).
- **<>**: References specific Blocks in comments (e.g., `Specify the Blocks with <S2>`).
- **--**: Defines the connection between two Blocks (e.g., `S1--S2`).

---

## Error Handling

- If a connection references a Block that is not defined, the system will report a **Missing Block Error**, but will still render the flowchart ignoring the missing Block and its connections.

---

## Future Enhancements

- Adding support for condition-based connections.
- Allow defining connections before Block definition with a delayed rendering mechanism.
- Better error messages for undefined Blocks and connections.

---

This system provides flexibility in defining flowchart structures, enabling collaboration between multiple users and ensuring a clear understanding of Block and connection behaviors in complex systems.

