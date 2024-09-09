# Flowchart Markup Language (FML)

This repository defines a markup language for generating flowcharts programmatically, focusing on nodes, connections, and collaboration between users. The system is defined in two main parts:

- **Node Definition**: Contains all the details related to the nodes.
- **Connection Definition**: Links nodes together to form the flow of the flowchart.

## Node Definition

Each node is defined with unique attributes such as type, size, position, and color. Here's the format:

```plaintext
S1(UID, Type, Parameters, Size, Color, Position, Path, Line, Comment)
```

### Example:

```plaintext
S1(TYUSY, idsquare, [ANY], (15,12,1), #B040E0D0, (14,13), "src/main/hello.py", 2, "This has to go to the top and am assigning @Joab to this task Specify the nodes with <S2>")
S2(DFGST, idoval, [ANY], (10,7,1), #2BFFE0D0, (26,13), "src/main/hello.py", 5, "Correct the Connections *mention the connections with -C1-")
```

### Node Parameters

- **UID**: Unique identifier for the node. Automatically assigned if not provided.
- **Type/Shape**: The shape of the node (e.g., `idsquare`, `idoval`, `idrect`, etc.).
- **Parameters**: Custom parameters enclosed in `[]`.
- **Size**: `(Width, Height, Border)`. Defines the dimensions and border of the node.
- **Color**: Box and border color defined in HEX format (e.g., `#B040E0D0`).
- **Position**: `(X, Y)`. X and Y coordinates of the node in the flowchart.
- **Path**: Path of the source code or files related to the node (optional).
- **Line**: Line number in the file (optional).
- **Comment**: Additional information for collaboration, wrapped in `""`. You can tag users using `@` and refer to other nodes using `< >`. Comments are marked using `!`.

---

## Connection Definition

Connections define the flow between nodes. Each connection is represented with the following format:

```plaintext
C1 S1->S2(VariableName),S3
```

### Example:

```plaintext
C1 S1->S2 !Connection from node S1 to S2!
C2 S5->S4 !This connection leads from node S5 to S4!
C3 S4->S3 !S4 connects to S3 for further processing!
C4 S3->S8 !Circle node connects to the rectangular input capture node!
C5 S8->S9 !Node S8 forwards input to S9 for further decision-making!
```

- **C1**: Connection ID (if not provided, it is auto-generated).
- **S1->S2**: Connects node `S1` to node `S2`. Multiple connections can be defined using commas (e.g., `S1->S2,S3`).
- **!**: Everything inside the `!` is treated as a comment and will be ignored in the flowchart.

---

## Example

```plaintext
!Definition!
S1(TYUSY, idsquare, [ANY], (15,12,1), #B040E0D0, (14,13), "src/main/hello.py", 2, "This has to go to the top and am assigning @Joab to this task Specify the nodes with <S2>")
S2(DFGST, idoval, [ANY], (10,7,1), #2BFFE0D0, (26,13), "src/main/hello.py", 5, "Correct the Connections *mention the connections with -C1-")
S3(WZPXB, idcircle, [ANY], (20,15,2), #FFB347D0, (30,18), "Circle node is responsible for validation -C2-")
S4(KLOVR, idrect, [ANY], (25,20,1), #2E8B57D0, (45,25), "Process the data and forward it to the next step <S3>") !UID for the node will be automatically assigned!
S5(NMVOP, idoval, [ANY], (18,10,1), #FFD700D0, (60,40), "Oval node handles the decision-making part -C3-")

!Connection!
C1 S1->S2 !Connection from node S1 to S2!
C2 S5->S4 !This connection leads from node S5 to S4!
C3 S4->S3 !S4 connects to S3 for further processing!
C4 S3->S8 !Circle node connects to the rectangular input capture node!
C5 S8->S9 !Node S8 forwards input to S9 for further decision-making!
```

---

## Syntax Breakdown

1. **Node Syntax**:
    - Nodes are created with specific properties such as size, color, position, and custom parameters.
    - Comments can be added using `!`.

2. **Connection Syntax**:
    - Define connections using `S1->S2`.
    - Connections can include multiple links (e.g., `S1->S2,S3`).
    - Comments related to connections are defined using `!`.

---

## Symbols and Tags

- **@**: Used to tag users for collaboration or task assignment (e.g., `@Joab`).
- **<>**: References specific nodes in comments (e.g., `Specify the nodes with <S2>`).
- **--**: Defines the connection between two nodes (e.g., `S1--S2`).

---

## Error Handling

- If a connection references a node that is not defined, the system will report a **Missing Node Error**, but will still render the flowchart ignoring the missing node and its connections.

---

## Future Enhancements

- Adding support for condition-based connections.
- Allow defining connections before node definition with a delayed rendering mechanism.
- Better error messages for undefined nodes and connections.

---

This system provides flexibility in defining flowchart structures, enabling collaboration between multiple users and ensuring a clear understanding of node and connection behaviors in complex systems.

